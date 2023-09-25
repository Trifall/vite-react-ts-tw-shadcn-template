// lint-staged.config.cjs
module.exports = {
	'src/**/*.{js,jsx,ts,tsx,css,scss,md}': [
		'eslint --cache --fix --max-warnings=0',
		'prettier --write --ignore-unknown',
	],
};
