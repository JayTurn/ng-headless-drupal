/**
 * Example Factory for the coreServices.
 *
 * We load the module file in order to inject the coreServices module.
 * Using the headlessCore Path defined in boot.js
 */

define(['headlessCore/services/module'], function(coreServices) {
  'use strict';
  coreServices.factory('HdExampleFactory', function () {
    console.log('coreService Factory');
    return {
      exampleMethod: function () {
        console.log('Example Method');
      }
    };
  });
});


