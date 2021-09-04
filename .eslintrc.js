module.exports = {
  plugins: ['jest'],
  extends: [
    'airbnb-typescript/base',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "no-throw-literal": 'off',
    "@typescript-eslint/no-throw-literal": 'off'
  }
};
