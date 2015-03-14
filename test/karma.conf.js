/**
 *  Karma configuration
 *    Reference: http://karma-runner.github.io/0.10/config/configuration-file.html
 */

module.exports = function(config) {
  'use strict';

  config.set({
    // Base path to be used for the test runner.
    basePath: '../',

    // Defining frameworks to be used with testing.
    frameworks: ['jasmine', 'requirejs', 'ng-scenario'],

    // Files to be loaded in the browser for testing.
    files: [
      { pattern : 'app/bower_components/requirejs/require.js', included : false },
      { pattern : 'app/bower_components/angular/angular.js', included : false },
      { pattern : 'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js', included : false },
      { pattern : 'app/bower_components/angular-cookies/angular-cookies.js', included : false },
      { pattern : 'app/bower_components/angular-resource/angular-resource.js', included : false },
      { pattern : 'app/bower_components/angular-route/angular-route.js', included : false },
      { pattern : 'app/bower_components/angular-sanitize/angular-sanitize.js', included : false },
      { pattern : 'app/bower_components/angular-scenario/angular-scenario.js', included : false },
      { pattern : 'app/bower_components/angular-scroll/angular-scroll.js', included : false },
      { pattern : 'app/scripts/{*,base/*,custom/*,**/**/*}.js', included : false },
      { pattern : 'test/unit/{**/**/,**/**/**/}*.spec.js', included : false },
      'app/bower_components/headjs-notify/src/load.js',
      'app/build/boot.js'
    ],

    // Excluded files/patterns.
    exclude: [],

    // Define the web server port to be used for tests.
    port: 9876,

    // Level of logging.
    // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Set the auto watching of files for live test running.
    autoWatch: false,

    //plugins : [
      //'karma-chrome-launcher',
      //'karma-jasmine',
      //'karma-requirejs',
      //'karma-junit-reporter'
    //],

    // Array of reporters to be used for logging.
    reporters : ['progress', 'junit'],

    // JUnit output file path.
    junitReporter : {
      outputFile: 'test/results.xml'
    },
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

