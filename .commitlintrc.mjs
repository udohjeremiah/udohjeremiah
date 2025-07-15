import { RuleConfigSeverity } from "@commitlint/types";

/** @type {import("@commitlint/types").UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Body and footer can be multiline and lengthy (allow for detailed info)
    "body-max-line-length": [RuleConfigSeverity.Disabled, "always", Infinity],
    "footer-max-line-length": [RuleConfigSeverity.Disabled, "always", Infinity],

    // Header length must be concise and readable
    "header-max-length": [RuleConfigSeverity.Error, "always", 72],

    // Allow references (e.g. issues, PRs); disallow empty reference field
    "references-empty": [RuleConfigSeverity.Error, "never"],

    // Scope must not be empty (encourages more context)
    "scope-empty": [RuleConfigSeverity.Error, "never"],

    // Type must not be empty
    "type-empty": [RuleConfigSeverity.Error, "never"],

    // Enforce commit types
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "build", // build system changes
        "chore", // maintenance tasks
        "ci", // CI/CD changes
        "docs", // documentation only
        "feat", // new feature
        "fix", // bug fix
        "note", // adding or updating a note
        "perf", // performance improvements
        "post", // adding or updating a blog post
        "refactor", // refactoring code, no feature or fix
        "revert", // reverting changes
        "style", // formatting, missing semi colons, etc.
        "test", // adding or correcting tests
      ],
    ],

    // Enforce lower case type (fix, feat, chore, etc.)
    "type-case": [RuleConfigSeverity.Error, "always", "lower-case"],
  },
};
