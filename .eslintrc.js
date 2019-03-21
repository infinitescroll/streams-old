module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  parser: 'babel-eslint',
  extends: 'fullstack',
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-uses-vars': [2],
    'no-console': 0,
    semi: [1, 'never'],
    'react/jsx-child-element-spacing': 0,
  },
}
