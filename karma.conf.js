/**
 *  Karma configuration
 *    Reference: http://karma-runner.github.io/0.10/config/configuration-file.html
 */

module.exports = function(config) {
  config.set({
    // Base path to be used for the test runner.
    basePath: '',

    // Defining frameworks to be used with testing.
    frameworks: ['jasmine', 'ng-scenario'],

    // Files to be loaded in the browser for testing.
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'app/scripts/**/**/*.js',
      'test/base/**/*.js',
      'test/custom/**/*.js',
      'test/custom/**/**/*.js',
    ],

    // Excluded files/patterns.
    exclude: [],

    // Define the web server port to be used for tests.
    port: 8080,

    // Level of logging.
    // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Set the auto watching of files for live test running.
    autoWatch: false,


    /** 
     * Browsers to be used for testing, multiple can be used at once.
     * Currently available: 
     * - Chrome
     * - ChromeCanary
     * - Firefox
     * - Opera
     * - Safari (only Mac)
     * - PhantomJS (requires local PhantomJS setup)
     * - IE (only Windows)
     */
    browsers: ['Chrome'],

    // Continous integration mode.
    // If true, Karma will exit after completing a single run of tests.
    singleRun: false
  });
};

