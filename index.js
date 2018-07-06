'use strict'

module.exports = {
  'extends': [
    'xo',
    'xo-space/esnext'
  ],
  'parserOptions': {
    'ecmaVersion': 2017
  },
  'globals': {
    '$': true,
    'describe': true,
    'test': true,
    'expect': true,
    'window': true,
    'document': true
  },
  'parser': 'babel-eslint',
  'rules': {
    'semi': [2, 'never'],
    'capitalized-comments': 0,
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [0, 'always'],
    'space-before-function-paren': ['error', 'always'],
    'import/no-unassigned-import': [2, {
      'allow': [
        '**/*.css',
        '**/*.scss'
      ]
    }],
    "no-warning-comments": [
      0
    ],
    "unicorn/regex-shorthand": 0,
    "radix": 0
  }
}
