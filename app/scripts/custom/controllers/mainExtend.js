/**
 * Example Controller for the baseControllers.
 *
 * We load the module file in order to inject the customControllers module.
 * Using the headlessCore Path defined in boot.js
 *
 */
define(['headlessCustom/controllers/module'], function(controllers) {
  'use strict';
  controllers.controller('MainExtendedController', function ($scope, $controller) {
    $scope.testExt = 'TEST MAIN EXTEND';
    console.log($scope);
    angular.extend(this, $controller('MainController', {$scope: $scope}));
    console.log($scope);
  });
});
