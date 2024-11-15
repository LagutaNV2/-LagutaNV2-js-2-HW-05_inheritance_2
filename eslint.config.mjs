import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";

 /** @type {import('eslint').Linter.Config[]} */
// /** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
    }
  },
  {
    ignores: ["dist/*"]
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // Добавляем Jest-глобальные переменные
      },
    },
    ...jest.configs["flat/recommended"],

  rules: {
      ...jest.configs["flat/recommended"].rules,

    }
  }
];
