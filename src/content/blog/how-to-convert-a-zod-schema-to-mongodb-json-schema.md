---
title: How to Convert a Zod Schema to a MongoDB JSON Schema
description: Learn how to effortlessly transform your Zod schemas into MongoDB-compatible JSON Schemas.
heroImage: ../../../public/blog/zod-to-mongo-schema.webp
publishedOn: 2025-10-31
tags: [json schema, mongodb, typescript, zod]
---

TL;DR: I created a simple library that exports a single function which takes a
Zod schema and then converts it to a MongoDB JSON Schema. Check it out on
[GitHub](https://github.com/udohjeremiah/zod-to-mongo-schema).

## Before Zod v4

There are a couple of libraries out there that converts a Zod schema to a JSON
Schema that can be used to annotate and validate MongoDB documents. Most of
these libraries were created before Zod v4.

These libraries did the arduous task of mapping each Zod type to their
equivalent MongoDB BSON type and uses some TypeScript hack to specify BSON
types.

But the introduction of Zod v4 has made converting Zod schemas to MongoDB JSON
Schemas a breeze. Zod v4 introduces two cool APIs that makes this simple to
implement: `z.toJSONSchema` and `.meta`.

`z.toJSONSchema` converts Zod schemas to JSON Schemas. No more monotonous
mappings, the library does it itself and outright better. `.meta` allows us to
associate schemas with additional metadata that we can later access and use for
whatever we want.

So if there's a `z.toJSONSchema` API, why are we having this conversation? We
should start using it immediately to convert our schemas, you would say. Well, I
wish that was the case but it isn't.

MongoDB supports draft 4 of JSON Schema. Yes, you can pass the target as draft 4
when converting with `z.toJSONSchema`. But even when you do that, the resulting
JSON Schema still isn't _compatible_ with what MongoDB accepts. Surprising
right?

While I said earlier that MongoDB supports draft 4 of JSON Schema, there was a
part I didn't add: it does so _with some differences_.

So, how do we solve this? Well, that's the whole point of this article. Let's
get started.

## The Differences

MongoDB JSON Schema is kind of a _subset_ of the JSON Schema Draft 4. It adds
one thing and removes few things.

The addition is:

- `bsonType` keyword: You can consider this an extension of the `type` keyword
  in JSON Schema. `type` can either be `"null"`, `"boolean"`, `"object"`,
  `"array"`, `"number"`, or `"string"`. The `bsonType` can also be any of these
  values and more. With `bsonType`, you can use all of the BSON types supported
  by MongoDB.

The removals are:

- Hypertext definitions which are used to define hyperlinks on instance data and
  provide additional information required to interpret JSON data.

- Hypermedia and linking properties of JSON Schema, including the use of JSON
  references and JSON pointers.

- The keywords `$ref`, `$schema`, `default`, `definitions`, `format`, and `id`.

- The `integer` type.

- Unknown keywords. For a list of the available keywords accepted, refer to the
  [MongoDB docs](https://www.mongodb.com/docs/manual/reference/operator/query/jsonSchema/#available-keywords).

## Tackling the differences

### Additions

Let's talk about the extension first. Consider this code below and its output:

```ts
import z from "zod";

const zodSchema = z.object({
  name: z.string(),
  middleName: z.nullable(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    zip: z.string().optional(),
  }),
  isStudent: z.boolean(),
  hobbies: z.array(z.string()),
  score: z.number(),
});

const jsonSchema = z.toJSONSchema(zodSchema);
console.log(JSON.stringify(jsonSchema, null, 2));
```

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "middleName": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ]
    },
    "address": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "zip": {
          "type": "string"
        }
      },
      "required": ["street", "city"],
      "additionalProperties": false
    },
    "isStudent": {
      "type": "boolean"
    },
    "hobbies": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "score": {
      "type": "number"
    }
  },
  "required": [
    "name",
    "middleName",
    "address",
    "isStudent",
    "hobbies",
    "score"
  ],
  "additionalProperties": false
}
```

As you should notice, the `type` keyword is what's used to specify the types of
properties in JSON Schemas. If we were to copy this and remove the `$schema`
line, we could use it as a MongoDB JSON Schema validator and it would work!

So, there really isn't really much to do here. Our task would be to add a way
for the user to specify a BSON type when the Zod API doesn't provide one.

### Removals

MongoDB, as mentioned earlier, makes some removals from the JSON Schema Draft 4.
When using `z.toJSONSchema`, we need to take note of where these removals might
pop up.

The removals that has to do with Hypertext and Hypermedia isn't a big deal.
Because, in a Zod schema you can't specify a `links` field that gets added to
the top-level of the JSON Schema or additional keywords like `media` that gets
added to a property of the JSON Schema.

Next is unknown keywords. How can you pass an unknown keyword to the MongoDB
JSON Schema? There are two ways you could do it:

- When you pass a Zod schema to `z.toJSONSchema`, it _tries_ to convert it to a
  JSON schema. If the Zod schema contains an api that's not representable in
  JSON schema (like `z.int64()` or `z.date()`), Zod will throw an error. But if
  the conversion succeeded, that means the converted schema doesn't contain an
  "unknown" keyword that JSON Schema can't recognize. But even then, the
  converted schema can still fail as a MongoDB validator because it might
  contain a "removed" keyword (like `default`). So, though the keyword is known
  to JSON Schema, MongoDB considered it _removed_ hence _unknown_.

- When you use `.meta` to add keywords that the JSON Schema itself doesn't
  recognize, and converts it to a JSON Schema. The conversion may pass for the
  JSON Schema, but the resulting schema might fail as a MongoDB validator. In
  this, the keyword is both _unknown_ to JSON Schema and MongoDB.

Next is removed keywords. Well, it's straightforward and this brings us to
another task to implement. We would need to traverse the JSON Schema, and remove
the unsupported keywords.

Finally, the `integer` type. For the most part, you won't encounter `integer` as
long as you stick to using `z.number()`. This is because `z.number()` produces
`type: "number"` and the `number` BSON alias matches the integer, decimal,
double, and long BSON types.

You get the `integer` type when you do:

- `z.int()` which corresponds to a 53-bit integer range, setting `minimum` to
  `-2^53` and `maximum` to `2^53 - 1`.
- `z.int32()` which corresponds to a 32-bit integer range, setting `minimum` to
  `-2^31` and `maximum` to `2^31 - 1`.

So what do we do when we get the `integer` type? This brings us to another task
to implement: convert the `integer` type to the equivalent BSON type
(`int`, `long` or `number`) based on the `minimum` and `maximum` fields.

### `.meta`

The next big question is how do we represent BSON types that are not available
in Zod? Metadata is the rescue!

Zod v4 introduced the concept of
[metadata and registries](https://zod.dev/metadata). Basically, it's a way to
associate a schema with additional metadata, store that schema in a registry,
and then have TypeScript enforce type safety for its metadata. Why would you
want to add metadata? Well, we could use those metadata as documentation,
generate code, validate forms, etc. The list is endless.

Where each schema can have it own registry it's registered to, Zod provides a
global registry that can be used to store metadata specifically for JSON Schema
generation. When we add metadata to a schema to the global registry, all the
metadata fields will be copied into the resulting JSON Schema when converted
with `z.toJSONSchema`:

```ts
const emailSchema = z.string().register(z.globalRegistry, {
  title: "Email address",
  description: "Your email address",
});

const jsonSchema = z.toJSONSchema(emailSchema);
console.log(JSON.stringify(jsonSchema, null, 2));
```

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "string",
  "title": "Email address",
  "description": "Your email address"
}
```

The global registry accepts the following metadata:

```ts
export interface GlobalMeta {
  id?: string;
  title?: string;
  description?: string;
  deprecated?: boolean;
  [k: string]: unknown;
}
```

`id`, `title` and `description` are all valid keywords in JSON Schema Draft 4,
but `deprecated` isn't—it was added in a later draft. The _index signature_
allows the global registry to have any number of additional metadata with a
value of any type.

Instead of doing `.register(z.globalRegistry, {...})`, we can simply use
`.meta({...})` to add metadata to the global registry.

With `.meta` we can add whatever metadata we like to a schema. Of course, we
don't want to do that, since all hell will break loose. So, what exactly do we
want? the `bsonType` keyword. Using `.meta({ bsonType: "..." )`, we want to
specify the types for properties we want if they're not available in Zod.

This brings us to the next task to implement: globally augment the `GlobalMeta`
interface, so we get TypeScript intellisense for `bsonType` in `.meta`.

## Abuse and incorrect use of `.meta`

Yes, using `.meta` we can specify a `bsonType`:

```ts
const zodSchema = z.object({
  _id: z.unknown().meta({ bsonType: "objectId" }),
});

const jsonSchema = z.toJSONSchema(zodSchema);
console.log(JSON.stringify(jsonSchema, null, 2));
```

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "_id": {
      "bsonType": "objectId"
    }
  },
  "required": ["_id"],
  "additionalProperties": false
}
```

But the challenge is we can specify _anything_ inside `.meta` and it wouldn't
fail in `z.toJSONSchema`:

```ts
const zodSchema = z.object({
  dob: z.unknown().meta({ whatever: "trash" }),
});

const jsonSchema = z.toJSONSchema(zodSchema);
console.log(JSON.stringify(jsonSchema, null, 2));
```

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "dob": {
      "whatever": "trash"
    }
  },
  "required": ["dob"],
  "additionalProperties": false
}
```

This means `.meta` can be _abused_ to add properties that would pass in
`z.toJSONSchema` but fail in MongoDB JSON Schema.

Secondly, `.meta` can be used incorrectly. Consider this code below and its
output:

```ts
const zodSchema = z.object({
  name: z.array(z.string()).meta({ bsonType: "string" }),
});

const jsonSchema = z.toJSONSchema(zodSchema);
console.log(JSON.stringify(jsonSchema, null, 2));
```

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "bsonType": "string",
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": ["name"],
  "additionalProperties": false
}
```

Did you see `items`? That's wrong! A string shouldn't have `items`. It doesn't
even make sense.

So, the question is how do we build a robust implementation where `.meta` can be
used to specify `bsonType` but not abused and used incorrectly?

There are two ways we could approach it:

1. Implementation-controlled: In this approach, the user can use whatever schema
   they want and add `.meta` to it. In the resulting schema, we would go through
   each property and then find a way to handle it internally, so that it's
   MongoDB-compatible. Like in the example above where string has `items`, we
   would remove `items`. I guess, you can see where this will lead us to?
   Re-implementing the entire JSON Schema!

2. User-controlled: In this approach, the user is in full control. This means to
   have a MongoDB-compatible JSON Schema, the user is advised to rely on their
   Zod schema only. `.meta` should only be used to specify `title`,
   `description` and BSON types not available in Zod. Anything outside these
   uses, the user is assumed to know better and bears full responsibility.

I think (2) makes more sense, so we would go with that.

## Building the solution and shipping it

With us understanding what the Zod library itself provides, why the JSON Schema
it returns isn't MongoDB-compatible, how to fix it, and the design decisions
we'll use, it's time to write code.

For the sake of brevity, I won't be explaining each line of code. I did my best
to provide comments where it made sense, and if you understand recursions, then
the code should be easy to grasp.

There you have it:

```ts
import z from "zod";

declare module "zod" {
  interface GlobalMeta {
    bsonType: string;
  }
}

// JSON Schema keys not supported by MongoDB's `$jsonSchema` operator
const UNSUPPORTED_KEYS = [
  "$ref",
  "$schema",
  "default",
  "definitions",
  "format",
  "id",
] as const;

function _typeForInteger(json: Record<string, any>) {
  // Only process JSON Schemas with type as `"integer"`
  if (json.type !== "integer" && json.bsonType !== "integer") {
    return json.bsonType;
  }

  const INT32_MIN = -2_147_483_648; // 2^31 * -1
  const INT32_MAX = 2_147_483_647; // 2^31 - 1
  const INT53_MIN = -9_007_199_254_740_991; // -(2^53 - 1)
  const INT53_MAX = 9_007_199_254_740_991; // 2^53 - 1
  const INT64_MIN = -9_223_372_036_854_775_808n; // -(2^63)
  const INT64_MAX = 9_223_372_036_854_775_808n; // 2^63 - 1

  const min = json.minimum ?? INT53_MIN;
  const max = json.maximum ?? INT53_MAX;

  // If the range is exactly the standard 32-bit or 53-bit, or no
  // custom range was specified, then let MongoDB enforce the limits.
  if (
    (min === INT32_MIN && max === INT32_MAX) ||
    (min === INT53_MIN && max === INT53_MAX) ||
    (json.minimum === undefined && json.maximum === undefined)
  ) {
    delete json.minimum;
    delete json.maximum;
    return min < INT32_MIN || max > INT32_MAX ? "long" : "int";
  }

  // If a custom range is specified, then let the range decide.
  // Zod automatically adds `minimum` and `maximum` for `int32` and `int`,
  // even if the user only specifies one of them. In such cases, the "other"
  // boundary is artificially added by Zod. We want to detect those
  // automatically added fields and remove them so that MongoDB enforces its
  // default min/max limits for the type.
  if (min >= INT32_MIN && max <= INT32_MAX) {
    if (json.minimum === INT32_MIN) delete json.minimum;
    if (json.maximum === INT32_MAX) delete json.maximum;
    return "int";
  }

  if (BigInt(min) >= INT64_MIN && BigInt(max) <= INT64_MAX) {
    if (json.minimum === INT53_MIN) delete json.minimum;
    if (json.maximum === INT53_MAX) delete json.maximum;
    return "long";
  }

  // Integers beyond 64-bit integers (rare)
  return "number";
}

function _sanitizeSchema(schema: any): any {
  if (Array.isArray(schema)) {
    return schema.map((element) => _sanitizeSchema(element));
  }

  if (!schema || typeof schema !== "object") {
    return schema;
  }

  const sanitized: Record<string, any> = {};

  for (const [key, value] of Object.entries(schema)) {
    // Skip unsupported JSON Schema keywords
    if (UNSUPPORTED_KEYS.includes(key as any)) continue;

    sanitized[key] = _sanitizeSchema(value);
  }

  // Handle numeric type conversion
  if (sanitized.type === "integer" || sanitized.bsonType === "integer") {
    sanitized.bsonType = _typeForInteger(sanitized);
    delete sanitized.type;
  }

  // For consistency, only represent `number` with keyword `type`
  if (sanitized.type === "number" || sanitized.bsonType === "number") {
    sanitized.type = "number";
    delete sanitized.bsonType;
  }

  return sanitized;
}


export default function zodToMongoSchema(zodSchema: z4.$ZodType) {
  if (!zodSchema) return {};

  // Convert to JSON Schema Draft 4
  const rawJsonSchema = z4.toJSONSchema(zodSchema, { target: "draft-4" });

  // Sanitize to make it MongoDB-compatible
  return _sanitizeSchema(rawJsonSchema);
}
```

MongoDB is the primary database I work with and Zod at this point is invisible.
We create libraries for solutions we would likely use across projects, over and
over again. I think in the future, when I need to annotate and validate a
MongoDB document, I would likely come for this utility. So, yeah, it deserves to
be a library.

I created the [`zod-to-mongo-schema`](https://www.npmjs.com/package/zod-to-mongo-schema)
package you can install to use this utility. You can also find the code and a
detailed documentation on [GitHub](https://github.com/udohjeremiah/zod-to-mongo-schema).

## Conclusion

If you read the whole post and got to this point, you're the real boss. It means
your attention span hasn't be hijacked by _AI summaries_. Please guard it with
grace.

Remember, **"hackers hack, crackers crack, and whiners whine. Be a hacker."**
Thanks for your time.
