/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser'
  },
  plugins: [],
  rules: {
    'prettier/prettier': 'error',
    camelcase: 0,
    'no-console': 2,
    'no-alert': 2,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'any'
        }
      }
    ],
    'vue/attribute-hyphenation': ['error'],
    'vue/attributes-order': ['error']
  }
};
