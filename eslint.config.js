// ESLint configuración en formato JavaScript
export default [
	{
		ignores: ['node_modules/**', 'dist/**'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		rules: {
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
		},
		env: {
			node: true,
			es2021: true,
		},
	},
];
