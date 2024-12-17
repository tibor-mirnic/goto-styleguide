import globals from "globals";
import eslintPluginJavascript from "@eslint/js";
import eslintPluginTypescript from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginImport from 'eslint-plugin-import';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist']
  },
  {
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      'react-hooks': eslintPluginReactHooks
    },
    rules: {      
      ...eslintPluginReactHooks.configs.recommended.rules
    }
  },
  eslintPluginJavascript.configs.recommended,
  eslintPluginImport.flatConfigs.recommended,
  ...eslintPluginTypescript.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      // reconfigured rules
      "import/no-default-export": "error",   
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
    files: ["**/*.stories.tsx"],
    rules: {
      "import/no-default-export": "off",
      "import/no-extraneous-dependencies": "off"
    }
  }
];