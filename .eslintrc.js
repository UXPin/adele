module.exports = {
  extends: 'airbnb',
  plugins: ['jest'],
  env: {
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'arrow-body-style': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'prefer-destructuring': 'off',
    'class-methods-use-this': 'off',
    'no-mixed-operators': 'off',
    'jsx-a11y/tabindex-no-positive': 'off',
  },
};
