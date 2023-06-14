module.exports = {
	stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links', {
			name: '@storybook/addon-essentials',
			options: {
				backgrounds: false
			}
		},
		'@storybook/addon-interactions',
		'storybook-addon-mock',
		'storybook-addon-themes'],
	staticDirs: ['../../public'],
	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	},
	features: {
		interactionsDebugger: true
	},

	docs: {
		autodocs: true
	}
};