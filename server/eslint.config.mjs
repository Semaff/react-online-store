import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    env: {
      node: true,
    },
    languageOptions: {
      sourceType: "commonjs",
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
