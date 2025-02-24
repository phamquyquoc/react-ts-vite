module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: ["react", "react-hooks", "jsx-a11y", "@typescript-eslint"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    rules: {
      "react/react-in-jsx-scope": "off", // Không bắt buộc import React trong JSX (Vite hỗ trợ)
      "@typescript-eslint/no-unused-vars": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
    },
  };
  