module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier', // must be last
	],
	plugins: ['@typescript-eslint', 'react-refresh'],
	rules: {
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				allowTemplateLiterals: true,
				avoidEscape: true,
			},
		],
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/accessible-emoji': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
	},
};
