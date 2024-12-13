import globals from "globals";
import esPluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginImport from 'eslint-plugin-import';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      // reconfigured rules
      "import/no-default-export": "error", 
      "@typescript-eslint/lines-between-class-members": "off",
      "@typescript-eslint/comma-dangle": [
        "error",
        {
          "functions": "never"
        }
      ],
      "react/function-component-definition": [
        2,
        {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
        }
      ],
      // disabled rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "import/prefer-default-export": "off",
      "no-underscore-dangle": "off",
      "react/prop-types": "off"
    }
  },
  {
    files: ["**/*/*.stories.tsx"],
    rules: {
      "import/no-default-export": "off",
      "import/no-extraneous-dependencies": "off"
    }
  },
  {
    languageOptions: { globals: globals.browser }
  },
  esPluginJs.configs.recommended,
  eslintPluginImport.flatConfigs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended
];