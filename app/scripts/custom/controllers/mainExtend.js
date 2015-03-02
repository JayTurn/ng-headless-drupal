/**
 * Example Controller for the baseControllers.
 *
 * We load the ./module file in order to load inject baseControllers module.
 * 
 * If you are creating alternative folder structures, make sure you adjust the 
 * ./module path. Failing to do so will cause errors.
 *
 */
define(['./module'], function(controllers) {
  'use strict';
  controllers.controller('MainExtendedController', function ($scope, $controller) {
    $scope.testExt = 'TEST MAIN EXTEND';
    console.log($scope);
    angular.extend(this, $controller('MainController', {$scope: $scope}));
    console.log($scope);
  });
});
