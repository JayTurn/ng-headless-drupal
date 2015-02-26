/**
 * Example Factory for the custom services.
 *
 * We load the ./module file in order to load inject headlessDrupal.services 
 * module.
 * 
 * If you are creating alternative folder structures, make sure you adjust the 
 * ./module file path. Failing to do so will cause errors.
 *
 */

define(['../../../services/module'], function(services) {
  'use strict';
  services.factory('ExampleFactory', function ($scope) {
    console.log('headlessDrupal.services Factory');
    console.log($scope);
    return {
      test: function () {
        console.log('Custom factory test method.');
      }
    };
  });
});
