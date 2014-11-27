// Karma configuration
// Generated on Wed Nov 26 2014 21:43:48 GMT-0800 (Pacific Standard Time)

var reporters = [
    { type: 'html', subdir: 'report-html' }
];

if (!!process.env.TEAMCITY) {
     reporters.push({ type: 'teamcity' });
} else {
     reporters.push({ type: 'text' });
     reporters.push({ type: 'text-summary' });
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'application/**/*.js',
      'test/**/*-test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './application/**/*.js': ['jshint', 'coverage'],
        './test/**/*.js': ['jshint']
    },

    jshintPreprocessor: {
       stopOnError: true,

       jshintrc: './.jshintrc'
    },
  
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      // specify a common output directory
      dir: 'build/reports/coverage',
      reporters: reporters
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false 
  });
};
