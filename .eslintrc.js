module.exports = {
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    'typescript-eslint/no-unsafe-assignment': 'off',
  },
  overrides: [
    {
      files: ['app/**/*.tsx', 'app/**/*.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      }
    }
  ]
} 