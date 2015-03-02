/**
 * Main Controller to act as the application controller.
 */

define(['./module'], function(baseControllers) {
  'use strict';
  baseControllers.controller('MainController', 
    function ($scope) {
      console.log($scope);
  });
});


