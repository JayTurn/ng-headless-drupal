/**
 *  Implement asynchronous script loading, set up AngularJS application
 *  and initialize the application which also defines the routing.
 *
 */
(function( window, head ) {
  'use strict';
  
  // Karma test files to be loaded if we are running tests.
  if (typeof window !== 'undefined' && window.__karma__) {

   var tests = [];
   for (var file in window.__karma__.files) {
     if (window.__karma__.files.hasOwnProperty(file)) {
       if (/spec\.js$/.test(file)) {
         tests.push(file);
       }
     }
   }
  }

  head.js(
    // Pre-load vendor libraries.
    { require       : window.__karma__ ? 'base/app/bower_components/requirejs/require.js' : '../bower_components/requirejs/require.js',                   size: '82718' }
  )
  .ready('ALL', function() {
    console.log('Hello?');
    require.config({
      paths : {
        angular            : './bower_components/angular/angular',
        headlessBase       : './scripts/base',
        headlessCustom     : './scripts/custom',
        duScroll           : './bower_components/angular-scroll/angular-scroll',
        ngResource         : './bower_components/angular-resource/angular-resource',
        ngCookies          : './bower_components/angular-cookies/angular-cookies',
        ngSanitize         : './bower_components/angular-sanitize/angular-sanitize',
        ngRoute            : './bower_components/angular-route/angular-route',
        ngBootstrap        : './bower_components/angular-bootstrap/ui-bootstrap-tpls'
      },
      shim : {
        'angular'            : {'exports' : 'angular'},
        'config'             : ['angular'],
        'duScroll'           : ['angular'],
        'ngResource'         : ['angular'],
        'ngCookies'          : ['angular'],
        'ngSanitize'         : ['angular'],
        'ngRoute'            : ['angular'],
        'ngBootstrap'        : ['angular']
      },
      priority : 'angular'
    });

    require.config ({
      appDir  : window.__karma__ ? '/base/app' : '/',
      baseUrl : window.__karma__ ? '/base/app' : '/',
      deps : window.__karma__ ? tests : [],
      callback : window.__karma__ ? window.__karma__.start : null
    });

    require([
      'angular',
      'scripts/app',
      'scripts/routeManager'
    ], function(angular, headlessDrupal) {
      angular.element(document).ready(function() {
        console.log('Angular loaded?');
        var $body = angular.element(document.getElementsByTagName('html')[0]);
        angular.bootstrap($body, ['headlessDrupal']);
      });
    });

  });

}( window, head ));
