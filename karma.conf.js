// Karma configuration
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine-jquery', 'jasmine'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-jasmine-jquery-2',
            'karma-ng-html2js-preprocessor'
        ],

        // list of files / patterns to load in the browser
        files: [
            "node_modules/angular/angular.js",
            "node_modules/angular-mocks/angular-mocks.js",
            "node_modules/angular-ui-router/src/*.js",
            "node_modules/angular-bootstrap/*.js",
            "node_modules/angular-ui-bootstrap/dist/*.js",
            "node_modules/angular-block-ui/dist/*.js",
            "node_modules/angular-translate/dist/*.js",
            "node_modules/angular-translate/dist/**/*.js",
            "node_modules/jquery/dist/jquery.js",
            "node_modules/underscore/*.js",
            "node_modules/iso-currency/dist/*.js",
            "node_modules/oclazyload/dist/ocLazyLoad.min.js",
            "node_modules/fraud-analyzer/fraud-analyzer.js",
            "ext-libs/fraudnet/boiukprefs.js",
            "fonts/webfont.js",
            "views/*.html",
            "js/**/*.js",
            "js/app.js",
            "test/appSpec.js",
            "test/ShoppingCtrlSpec.js",
                    ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'js/**/*.js': ['coverage'],
            'views/*.html': ['ng-html2js']
        },

        // we will be accessing this by module name later on in Jasmine
        ngHtml2JsPreprocessor: {
            moduleName: 'clothingRetailer'
        },

        // optionally, configure the reporter
        coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: "html", subdir: "html" },
                { type: "lcov", subdir: "report-lcov" },
                { type: 'text-summary' }
            ]
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


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
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity


    })
}
