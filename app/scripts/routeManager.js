/**
 * Defines Route Handling for the headlessDrupal App
 */

define(['angular', 'scripts/app'], function(angular, app) {
  'use strict';

  return app.config([
    '$routeProvider',
    '$locationProvider',
    '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {
    // Define the route handling.
    $routeProvider
      //.when('/login', {
        //templateUrl: 'base/login',
        //controller: 'LoginCtrl'
      //})
      //.when('/:pagename', {
        //templateUrl: 'base/page',
        //controller: 'PageCtrl'
      //})
      //.when('/admin/pages', {
        //templateUrl: 'base/admin',
        //controller: 'AdminPagesCtrl'
      //})
      .when('/', {
        templateUrl: 'views/base/page',
        controller: 'PageController'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Set html5 url handling for page routing where supported.
    $locationProvider.html5Mode(true);

    // Intercept error responses and redirect accordingly.
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          // We aren't currently supporting authenticated users but it is 
          // expected to be handled.
          if(response.status === 401) {
            $location.path('/');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  }]);
});

