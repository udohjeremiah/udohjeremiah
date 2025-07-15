import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { defineEcConfig } from "astro-expressive-code";
import { pluginError } from "./plugins/plugin-error.js";

export default defineEcConfig({
  plugins: [pluginError(), pluginLineNumbers()],
  themes: ["ayu-dark"],
});
