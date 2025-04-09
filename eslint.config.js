import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      js,
      unicorn: eslintPluginUnicorn,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...eslintPluginUnicorn.configs.recommended.rules,
      'no-console': 'warn',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-process-exit': 'off',
      'unicorn/no-new-array': 'off',
    },
  },
];