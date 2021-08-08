module.exports = {
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "no-throw-literal": 'off',
    "@typescript-eslint/no-throw-literal": 'off'
  }
};
