/**
 * Main Controller to act as the application controller.
 */

define(['headlessCore/controllers/module'], function(coreControllers) {
  'use strict';
  console.log(coreControllers);
  coreControllers.controller('MainController', 
    function ($scope) {
      console.log($scope);
  });
});


