module.exports = {
  root: true,
  extends: ['./common.js'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.test.ts', '*.mock.ts'],
      rules: {
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unnecessary-type-assertion': ['warn'],
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/unbound-method': 0,
        'max-lines-per-function': 0,
        'unicorn/no-useless-undefined': 0,
      },
    },
  ],
  ignorePatterns: ['*.js', '*.d.ts'],
};
