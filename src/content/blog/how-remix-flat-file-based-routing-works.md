---
title: How Remix's Flat File-Based Routing Works
description: Learn how Remix's flat file-based routing generates routes from file names.
heroImage: ../../../public/blog/how-remix-flat-file-based-routing-works.webp
publishedOn: 2024-09-13
tags: [coding, remix]
---

## Introduction

So you've tried adopting the Remix web framework before. But you gave up the
idea because you felt the Remix default routing convention is _a mess_.

I feel you. That's how I _almost_ gave it up too. The default routing in Remix
isn't intuitive. Devs familiar with it will likely agree that it took some time
and _real_ effort to grasp.

In this article, I will be demystifying Remix's default routing convention. When
I'm done, you will have a good understanding of how it works. Let's roll.

## Prerequisite

This article assumes you're familiar with HTML, CSS, and JavaScript. If not, I
recommend familiarizing yourself with these technologies before proceeding.

## What is routing, route, and router in web development?

I can only imagine so much about you; after some point, all I can do is guess🤷.
So, _before talking about the fall of Rome, let's talk about Rome itself_. That
is, before we dive deep into how routing works in Remix, let's discuss what
routing is.

- Routing is the process that determines how a website responds to different
  [URLs](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL).
  For example, how `example.com` responds to `example.com/abc`,
  `example.com/abc/xyz`, etc.

- A route is a path on a website that points to a specific content or page. For
  example, `/abc` might be a route on `example.com` that points to the page
  `example.com/abc`.

- A router is a tool that manages routing, determining which content or page to
  display based on the URL.

Web apps can be Multipage Applications (MPAs) or Single-Page Applications
(SPAs). The terms _routing_, _route_, and _router_ have different meanings based
on the type of web app.

| **Aspect**          | **Multipage Applications (MPAs)**                                                                        | **Single Page Applications (SPAs)**                                                                                |
| :------------------ | :------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| **Routing**         | The browser sends a request to the server for each new page, causing a full page reload.                 | Handled by JavaScript in the browser, updating content without a full reload.                                      |
| **Route**           | Each route corresponds to a specific file or resource on the server (e.g., `/about` loads `about.html`). | Routes trigger specific content to be rendered without reloading the entire page.                                  |
| **Router**          | Server-side router matches the URL and serves the appropriate content.                                   | Client-side router listens to URL changes and renders content dynamically.                                         |
| **Browser History** | Managed by the browser; each page reload adds a new entry.                                               | Managed by the client-side router using [`history`](https://developer.mozilla.org/en-US/docs/Web/API/History_API). |

_"So, where does Remix stand?"_ you ask. Remix can build both! You can build
your app with server-side rendering (SSR) for fast loads, SEO, and real-time
data fetching, while still enjoying client-side routing like an SPA. Or, you can
_skip_ the server and use
[Remix in SPA mode](https://remix.run/docs/en/main/guides/spa-mode).

## What is the default convention for creating routes in Remix?

The heading of this section begs the question:
_Is there more than one way to create a route in Remix?_ The answer is YES.
Remix, unlike many other frameworks, recognizes that routing isn't
_one-size-fits-all_. So, it offers you the flexibility to choose what works best
for your project or team. How thoughtful 🥹.

But, in the dev world: _where there is no default, developers overthink_. To
prevent this, Remix provides a default convention. With this convention, you can
start developing without worrying about routing decisions. The default is:
**create a JavaScript or TypeScript file inside the `app/routes` folder, and you've got a route**.

This approach is referred to as "flat-file based". This is because all routes
are JavaScript (`.js`/`.jsx`) or TypeScript (`.ts`/`.tsx`) files, not folders.
Even for nested routes where the intuitive thing would be to nest files in
folders (as in Next.js), you still use files.

## How does the flat file-based routing work in Remix?

### Root route

The file `app/root.tsx` is the root route. It serves as the **root layout** of
the entire app. It's the first component in the UI that renders. The root route
is the _perfect place_ where you write styles, states, etc., you want to share
across the entire app.

In Remix, an app can only have one root route (i.e. one root layout) shared
across the entire app. This means, that unlike
[in Next.js where multiple root layouts can be created](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts),
this isn't possible in Remix. If you're developing an app that has sections with
different layouts, there's a way of doing that in Remix. You'll find out soon.

With an `app` directory like this:

```
app
└── root.tsx
```

- When you navigate to `/`, the UI renders in the following component hierarchy:

  ```tsx
  <root />
  ```

### Basic routes

Creating a JavaScript (`.js`/`jsx`) or TypeScript (`.ts`/`.tsx`) file in the
`app/routes` folder generates a route in your app. The route's URL corresponds
to the filename without the extension.

| File                   | Matched route (URL) |
| :--------------------- | :------------------ |
| `app/routes/about.tsx` | `/about`            |

The exceptions to this are index routes:

| File                             | Matched route (URL) |
| :------------------------------- | :------------------ |
| `app/routes/_index.tsx`          | `/`                 |
| `app/routes/concerts._index.tsx` | `/concerts`         |

With an `app` directory like this:

```
app
├── root.tsx
└── routes
    ├── _index.tsx
    └── about.tsx
```

- When you navigate to `/` , the UI renders in the following component
  hierarchy:

  ```tsx
  <root>
    <_index />
  </root>
  ```

- When you navigate to `/about`, the UI renders in the following component
  hierarchy:

  ```tsx
  <root>
    <about />
  </root>
  ```

### Dynamic routes

How do you create a route when you don't know the exact path ahead of time?
Consider an app where users have unique URLs for accessing their dashboard. For
example, Ayo Tunde accesses his dashboard at `example.com/ayotunde`, Ada Mba at
`example.com/adamba`, etc.

These kinds of routes are generated from dynamic data that isn't known in
advance. Hence, they're called **dynamic routes**. You create them by using the
`$` prefix.

| File                   | Matched route (URL) |
| :--------------------- | :------------------ |
| `app/routes/$user.tsx` | `/ayotunde`         |
| `app/routes/$user.tsx` | `/adamba`           |
| `app/routes/$user.tsx` | `/8rv71k0hvg8`      |

Note that you cannot have more than **one** dynamic route at the same level. For
instance, having both `app/routes/$user.tsx` and `app/routes/$id.tsx` would
cause a conflict. Unfortunately, Remix won’t throw an error when you do.

With an `app` directory like this:

```
app
├── root.tsx
└── routes
    └── $user.tsx
```

- When you navigate to `/ayotunde`, `/chiomamba`, `/8rv71k0hvg8`, etc, the UI
  renders in the following component hierarchy:

  ```tsx
  <root>
    <$user />
  </root>
  ```

### Nested routes

How do you create routes with paths such as `concerts/trending`,
`concerts/lagos`, etc,.? These kind of routes are created with _dot delimiters_
and are called **nested routes**.

By dot delimiters, I mean `.` are used to separate the different parts of a
route as it creates a `/` in the URL. So, `app/routes/concerts.trending.tsx`
matches the route `concerts/trending`.

But what does the `.` separates the route into exactly? It separates them into
the _parent route_ and the _child route_. The part before the `.` is the parent
route, and matches a route with that filename. So, the route
`app/routes/concerts.trending.tsx` will have `app/routes/concerts.tsx` as its
parent route. The part after the `.` is the nested child route, sharing the
parent route as its layout.

When you create a nested route, ensure that there's a nested index route for the
parent route. Otherwise, users will get a `404` error when they navigate to the
parent URL.

With an `app` directory like this:

```
app
├── root.tsx
└── routes
    ├── concerts.$city.tsx
    ├── concerts._index.tsx
    ├── concerts.trending.tsx
    └── concerts.tsx
```

- When you navigate to `/concerts`, the UI renders in the following component
  hierarchy:

  ```tsx
  <root>
    <concerts>
      <concerts._index />
    </concerts>
  </root>
  ```

- When you navigate to `/concerts/trending`, the UI renders in the following
  component hierarchy:

  ```tsx
  <root>
    <concerts>
      <concerts.trending />
    </concerts>
  </root>
  ```

- When you navigate to `/concerts/lagos`, `/concerts/benin`, `/concerts/abuja`,
  etc, the UI renders in the following component hierarchy:

  ```tsx
  <root>
    <concerts>
      <concerts.$city />
    </concerts>
  </root>
  ```

### Nested routes without layout nesting

As previously discussed, nested routes automatically get their parent routes as
their layout. So, what do you do in a case where you want a nested URL but don't
want the child route to use the parent route as a nested layout? You opt out of
the parent route with a trailing underscore (`_`).

For example, the file `app/routes/concerts_.mine.tsx` will create a route
`/concerts/mine`. But, instead of the UI hierarchy rendering as:

```tsx
<root>
  <concerts>
    <concerts_.mine />
  </concerts>
</root>
```

It will render as:

```tsx
<root>
  <concerts_.mine />
</root>
```

Note that, the trailing underscore (`_`) only moves the child route out from the
immediate parent route. So, for a route like `app/routes/a.b_.c.tsx`, the UI
hierarchy will render as:

```tsx
<root>
  <a>
    <c />
  </a>
</root>
```

To get the route `a/b/c` to use the root route as the only layout, you will have
to use `_` twice: `app/routes/a_.b_.c.tsx`. The UI hierarchy then renders it as:

```tsx
<root>
  <c />
</root>
```

### Nested layouts without nested URLs

Consider an app that has a header and footer at the top and bottom of every
route respectively. But, you want some routes to not have those headers and
footers or have a completely different one. A common example of this is
authentication pages. So, how do you create such routes?

You use **pathless routes**. These are routes that can share a layout with a
group of routes without adding any path segments to the URL. They are created
with leading underscore (`_`).

For example, the route `app/routes/_auth.tsx` is a pathless route. It can be
used as a shared layout between the routes `app/routes/_auth.signup.tsx`,
`app/routes/_auth.signin.tsx`, etc. You can visit those routes at `/signup` and
`/signin`. The segment `auth` isn't included in the URL. And, if you navigate to
`/auth` you'll get a `404` error because it's a pathless route.

Now, here's a very common mistake newbies to Remix make. They think the routes
`app/routes/_auth.signup.tsx` and `app/routes/_auth.signin.tsx` will render as:

```tsx
<_auth>
  <_auth.signup />
</_auth>
```

```tsx
<_auth>
  <_auth.signin />
</_auth>
```

The correct component hierarchy that will be rendered in the UI is:

```tsx
<root>
  <_auth>
    <_auth.signup />
  </_auth>
</root>
```

```tsx
<root>
  <_auth>
    <_auth.signin />
  </_auth>
</root>
```

Why is this so? This is because the root route is the root layout of the entire
app! It renders in the component hierarchy of every single route in your app.
Hence, styles, states, and components you don't want every single route in your
app to have shouldn't be included in the root route.

### Optional Segments

Sometimes some path segments in your URL can be optional. A common example is in
apps that can be viewed in different languages. In such an app, a user might
navigate to say `example.com`, and view the content in their default browser
language. But, the user can also navigate to `example.com/en` to also view the
language in English.

You can create these optional segments by wrapping the route segment in
parentheses (`()`).

| File                                | Matched route (URL) |
| :---------------------------------- | :------------------ |
| `app/routes/($lang)._index.tsx`     | `/`                 |
| `app/routes/($lang).categories.tsx` | `/categories`       |
| `app/routes/($lang).categories.tsx` | `/en/categories`    |
| `app/routes/($lang).categories.tsx` | `/fr/categories`    |
| `app/routes/($lang)._index.tsx`     | `/bags`             |
| `app/routes/($lang).$productId.tsx` | `/en/bags`          |
| `app/routes/($lang).$productId.tsx` | `/fr/bags`          |

When using optional segments there are some stuff to watch out for:

- An optional segment index route will be used in place of the index route for
  the root route. Say you have both `app/routes/($lang)._index.tsx` and
  `app/routes/_index.tsx`. When you navigate to `/`, the UI will render in the
  following component hierarchy:

  ```tsx
  <root>
    <($lang)._index />
  </root>
  ```

- Optional segments match eagerly. Say you have both
  `app/routes/($lang)._index.tsx` and `app/routes/($lang).$productId.tsx`. When
  you navigate to `/bags`, the UI will render in the following component
  hierarchy:

  ```tsx
  <root>
    <($lang)._index />
  </root>
  ```

### Splat routes

The default behavior of websites is to throw a `404` error when a user navigates
to a path not existing. For a great UX, you might redirect users to a valid
route when they navigate to a non-existing one. These are pretty much the
obvious ways when it comes to handling non-existing paths in an app.

But, if there comes a time when you want all routes to be valid in your app,
Remix has got your back. You can have routes that match all URLs for your app,
including non-existing ones 🥶. These routes are called **splat routes** and are
created with the `$` character.

| File                     | Matched route (URL)                     |
| :----------------------- | :-------------------------------------- |
| `app/routes/$.tsx`       | Matches virtually any URL for your app. |
| `app/routes/files.$.tsx` | `/files`                                |
| `app/routes/files.$.tsx` | `files/books`                           |
| `app/routes/files.$.tsx` | `files/books/things-fall-apart`         |
| `app/routes/files.$.tsx` | `files/123/abc/xyz/iii`                 |

### Folders

I know I said earlier that in flat file-based routing, only files, and not
folders, can create routes. Well, that isn't entirely true. Remix recognizes
that most times you would want to organize your code closer to the routes that
use them. For example, a `/projects` route using a `ProjectList.tsx`,
`ProjectItem.tsx`, and `ProjectCard.tsx` component. With a _file-only_ approach,
we can't do any organization. Remix gives us folders as routes for this.

A route can also be a folder if it contains a `route.tsx` file. The `route.tsx`
file inside the folder is the root module and the rest of the other files in the
folder do not become routes. So, we can organize our `/projects` route into a
folder as this, making the components used by the route closer to it:

```
app
├── root.tsx
└── routes
    └── projects
        ├── ProjectCard.tsx
        ├── ProjectItem.tsx
        ├── ProjectList.tsx
        └── route.tsx
```

There are few things to note when using a folder as a route:

- The route path is completely defined by the folder name. You use the same
  naming convention as you would have done if it was a file, omitting the
  extension. For example, `app/routes/projects._index` for the route
  `/projects`, `app/routes/projects.$projectId` for the route
  `/app/projects/om4pt99jp7o`, etc.

- Nesting a folder inside another folder does not create a route. So the file
  `app/routes/projects/$projectId/route.tsx` does not create the route
  `/projects/skgpu5j4h9o`. To do so, use the `.` delimiter:
  `app/routes/projects.$projectId/route.tsx`. In short, only top-level folders
  inside `app/routes` that contain a `route.tsx` file will create routes.

## Escaping special characters

How do you create a route that has one of the special characters Remix uses for
route conventions? You escape it with square brackets (`[]`).

| File                                | Matched route (URL)              |
| :---------------------------------- | :------------------------------- |
| `app/routes/sitemap[.]xml.tsx`      | `/sitemap.xml`                   |
| `app/routes/[sitemap.xml].tsx`      | `/sitemap.xml`                   |
| `app/routes/weird-url.[_index].tsx` | `/weird-url/_index`              |
| `app/routes/dolla-bills-[$].tsx`    | `app/routes/dolla-bills-[$].tsx` |
| `app/routes/[[so-weird]].tsx`       | `/[so-weird]`                    |

## Conclusion

Developers hate _opinions_ but love _defaults_. Opinions handicap, while
defaults empower. Remix knows this so well that it provides a default convention
for routing. With this, you can spin up a Remix app and start developing it in
no time. Together, we've gone through this default convention to make sense of
it. And, I know you understand how it works better now.

This brings us to the conclusion of this great ride. Thanks for your time with
me on the journey so far 🫡. I know it was a wild one, but I guess we both
enjoyed it.

Remember, **"hackers hack, crackers crack, and whiners whine. Be a hacker."**
Take care.
