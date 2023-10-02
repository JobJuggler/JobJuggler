export default {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['warn', 2],
    'quotes': ['warn', 'single'],
    'prefer-const': 'warn',
    'semi': ['warn', 'always'],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 'warn'
  },
  settings: {
    'react': {
      'version':  'detect'
    }
  },
}


// module.exports = {
//   root: true,
//   env: {
//     'browser': true,
//     'es2021': true,
//     'node': true
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended'
//   ],
//   parserOptions: {
//     'ecmaFeatures': {
//       'jsx': true
//     },
//     'sourceType': 'module'
//   },
//   rules: {
//     'no-unused-vars': ['off', { 'vars': 'local' }],
//     'indent': ['warn', 2],
//     'quotes': ['warn', 'single'],
//     'prefer-const': 'warn',
//     'semi': ['warn', 'always'],
//     'react/prefer-stateless-function': 'off',
//     'react/prop-types': 'off',
//     'react/jsx-key': 'warn'
//   },
//   settings: {
//     'react': {
//       'version':  'detect'
//     }
//   }
  
  
// };

// {
//   "root": true,
//   "env": {
//     "browser": true,
//     "es2021": true,
//     "node": true
//   },
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },
//     "sourceType": "module"
//   },
//   "rules": {
//    " no-unused-vars": ["off", { "vars": "local" }],
//     "indent": ["warn", 2],
//     "quotes": ["warn", "single"],
//     "prefer-const": "warn",
//     "semi": ["warn", "always"],
//     "react/prefer-stateless-function": "off",
//     "react/prop-types": "off",
//     "react/jsx-key": "warn"
//   },
//   "settings": {
//     "react": {
//       "version": "detect"
//     }
//   },
//   "extends": ["react-app", "react-app/jest", "prettier"]
// }
