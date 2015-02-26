/**
 *  Implement asynchronous script loading, set up AngularJS application
 *  and initialize the application which also defines the routing.
 *
 */
(function( head ) {
  'use strict';
  head.js(
    // Pre-load vendor libraries.
    { require       : '../bower_components/requirejs/require.js',                   size: '82718' }
  )
  .ready('ALL', function() {

    require.config ({
      appDir  : '../..',
      baseUrl : '../..',
      paths : {
        angular            : '../bower_components/angular/angular',
        headlessBase       : './scripts/base',
        headlessCustom     : './scripts/custom',
        //config             : '../scripts/config',
        duScroll           : '../bower_components/angular-scroll/angular-scroll',
        ngResource         : '../bower_components/angular-resource/angular-resource',
        ngCookies          : '../bower_components/angular-cookies/angular-cookies',
        ngSanitize         : '../bower_components/angular-sanitize/angular-sanitize',
        ngRoute            : '../bower_components/angular-route/angular-route',
        ngBootstrap        : '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
      },
      shim : {
        'angular'            : {'exports' : 'angular'},
        'config'             : ['angular'],
        'duScroll'           : ['angular'],
        'ngResource'         : ['angular'],
        'ngCookies'          : ['angular'],
        'ngSanitize'         : ['angular'],
        'ngRoute'            : ['angular'],
        'ngBootstrap'        : ['angular'],
      },
      priority : 'angular'
    });

    require([
      'angular',
      'scripts/app',
      'scripts/routeManager'
    ], function(angular, wiggedy) {
      angular.element(document).ready(function() {
        var $body = angular.element(document.getElementsByTagName('html')[0]);
        angular.bootstrap($body, ['headlessDrupal']);
      });
    });

  });

}( window.head ));
