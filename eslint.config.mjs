import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import eslintConfigPrettier from 'eslint-config-prettier'
import importX from 'eslint-plugin-import-x'

export default [
  // 1. Базовые настройки для Vue и TypeScript от официальной команды Vue
  ...vueTsEslintConfig(),
  
  // 2. Рекомендованные правила для Vue
  ...pluginVue.configs['flat/recommended'],

  // 3. Настройки для парсинга файлов
  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // 4. Настройка импортов и алиасов (чтобы ESLint понимал @)
  {
    plugins: {
      'import-x': importX,
    },
    settings: {
      // требует, чтобы импорты шли сгруппированно и в заданном порядке. Порядок задан тут в groups
      'import-x/resolver': {
        typescript: {
          project: './tsconfig.app.json', // tsconfig, где прописаны paths
        },
      },
    },
    rules: {
      // Включаем проверку, что импорты реально существуют (с учетом алиасов)
      'import-x/no-unresolved': 'error', 
      // Сортировка импортов (опционально, но очень удобно)
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            { pattern: 'vue', group: 'external', position: 'before' },
            { pattern: '@/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },

  // 5. Игнорируем папки
  {
    ignores: ['dist', 'node_modules', 'public'],
  },

  // 6. Prettier должен быть В САМОМ КОНЦЕ, чтобы отключать конфликтующие правила ESLint
  eslintConfigPrettier, 
]