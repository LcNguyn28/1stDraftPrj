module.exports = {
  env: {
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,

    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "windows"],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
      },
    ],
    semi: ["error", "always"],
  },
};
