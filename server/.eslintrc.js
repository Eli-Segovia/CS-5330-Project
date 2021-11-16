/*global module */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  globals: {
    process: 'readonly',
    __dirname: 'readonly',
  },
  rules: {
    'no-unused-vars': 'off',
  },
};
