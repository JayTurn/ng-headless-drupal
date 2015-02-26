/**
 * Example Controller for the baseControllers.
 *
 * We load the ./module file in order to load inject baseControllers module.
 * 
 * If you are creating alternative folder structures, make sure you adjust the 
 * ./module path. Failing to do so will cause errors.
 *
 */

define(['./module'], function(baseControllers) {
  'use strict';
  baseControllers.controller('ExampleController', function ($scope) {
    console.log($scope);
  });
});

