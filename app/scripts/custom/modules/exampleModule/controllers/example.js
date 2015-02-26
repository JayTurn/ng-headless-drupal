/**
 * Example Controller for the custom controllers.
 *
 * We load the ./module file in order to load inject headlessDrupal.controllers 
 * module.
 * 
 * If you are creating alternative folder structures, make sure you adjust the 
 * ./module file path. Failing to do so will cause errors.
 *
 */

define(['../../../controllers/module'], function(controllers) {
  'use strict';
  controllers.controller('ExampleController', function ($scope) {
    console.log($scope);
  });
});
