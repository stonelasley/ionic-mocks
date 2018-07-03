var path = require('path');

module.exports = function(config) {
	var cfg ={
		basePath: '',
		frameworks: ['jasmine', 'karma-typescript'],
		reporters: ['progress', 'karma-typescript', 'coverage', 'coveralls'],
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
			type: 'lcov',
			dir: 'coverage'
		}
	};
	if (process.env.TRAVIS) {
		cfg.browsers = ['Chrome_travis_ci'];
	}

	config.set(cfg);
};
