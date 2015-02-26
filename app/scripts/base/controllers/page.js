/**
 * Page Controller to manage the default path handling.
 */

define(['./module'], function(baseControllers) {
  'use strict';
  baseControllers.controller('PageController', 
    function ($scope, $http, $routeParams, Page, $location) {
      // Define the page controller variables.
      var page,
          setPage;

      // Get the page path, using location.path for the home page.
      $scope.pagePath = ($location.path() === '/') ? $location.path() : $routeParams.pagename;

      console.log($scope);
      
  });
});

