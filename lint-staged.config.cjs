// lint-staged.config.cjs
module.exports = {
	'src/**/*.{js,jsx,ts,tsx}': ['eslint --cache --fix --max-warnings=0'],
	'src/**/*.{js,jsx,ts,tsx,css,scss,md,json}': 'prettier --write --ignore-unknown',
};
