import globals from "globals";
import eslintPluginJavascript from "@eslint/js";
import eslintPluginTypescript from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
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
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh
    },
    rules: {      
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
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
      // TODO: why is this not working out of the box
      "import/no-unresolved": "off",
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