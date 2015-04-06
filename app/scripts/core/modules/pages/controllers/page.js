/**
 * Page Controller to manage the default path handling.
 */

define(['headlessCore/controllers/module'], function(coreControllers) {
  'use strict';
  coreControllers.controller('PageController', 
    function ($scope, $http, $routeParams, $location, Page) {
      // Define the page controller variables.
      var page,
          setPage;

      // Get the page path, using location.path for the home page.
      $scope.pagePath = ($location.path() === '/') ? $location.path() : $routeParams.pagename;

      console.log($scope.pagePath);
      // Retrieve the page using the pagePath.
      page = Page.getPage($scope.pagePath);

      page.then(function (response) {
        console.log(response);

      });
      console.log($scope);
      
  });
});

