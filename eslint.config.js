// ESLint configuración en formato Flat Config para ESLint 9+
export default [
	{
		ignores: ['node_modules/**', 'dist/**'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				// Variables globales de Node.js
				require: 'readonly',
				module: 'readonly',
				__dirname: 'readonly',
				process: 'readonly',
				exports: 'readonly',
				console: 'readonly',
			},
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		rules: {
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
		},
	},
];
