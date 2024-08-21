import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars":"error",
      "no-undef": "error",
      "no-console":"warn",
      // "no-unused-expression":"error",
      "prefer-const":"error"
  },
  ignores: ["**/node_modules/", ".dist/"]
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];