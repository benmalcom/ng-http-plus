// Karma configuration
// Generated on Sat Sep 09 2017 23:08:58 GMT+0100 (WAT)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine', 'karma-typescript'],
		plugins: [
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-typescript'
		],


		// list of files / patterns to load in the browser
		files: [
			'node_modules/reflect-metadata/Reflect.js',
			{pattern: 'src/*.ts'},
			{pattern: 'test/test.spec.ts'}
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'src/*.ts': ['karma-typescript'],
			'test/*.spec.ts': ['karma-typescript']
		},
		mime: {
			'text/x-typescript': ['ts', 'tsx']
		},

		karmaTypescriptConfig: {
			tsconfig: "./tsconfig.json"
		},

		customLaunchers: {
			// chrome setup for travis CI using chromium
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: [' — no - sandbox']
			}
		},


	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['progress'],


		// web server port
		port
:
	9876,


		// enable / disable colors in the output (reporters and logs)
		colors
:
	true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel
:
	config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch
:
	true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers
:
	['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun
:
	false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency
:
	Infinity
})
};
