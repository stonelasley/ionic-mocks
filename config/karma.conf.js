var path = require('path');

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', 'karma-typescript'],
		reporters: ['progress', 'karma-typescript'],
		files: ['src/**/*.ts'],
		browsers: ['Chrome'],
		singleRun: true,
		colors: true,
		preprocessors: {'src/**/*.ts' : ['karma-typescript']},
		karmaTypescriptConfig: {
			compilerOptions: {
				rootDir: 'src',
				lib: ["es2016", "dom"]
			}
		},
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},
		coverageReporter: {
			dir: '../coverage/',
			reporters: [{
				type: 'text'
			}, {
				type: 'json',
				dir: '../coverage',
				subdir: 'json',
				file: 'coverage-final.json'
			}]
		}
	});
	if (process.env.TRAVIS) {
		cfg.browsers = ['Chrome_travis_ci'];
	}

	config.set(cfg);
};