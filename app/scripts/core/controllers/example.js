/**
 * Example Controller for the coreControllers.
 *
 * We load the module file in order to inject the coreControllers module.
 * Using the headlessCore Path defined in boot.js
 *
 */

define(['headlessCore/controllers/module'], function(coreControllers) {
  'use strict';
  coreControllers.controller('ExampleController', function ($scope) {
    console.log($scope);
  });
});

