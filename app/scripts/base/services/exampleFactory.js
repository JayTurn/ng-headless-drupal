/**
 * Example Factory for the baseServices.
 *
 * We load the ./module file in order to load inject baseServices module.
 * 
 * If you are creating alternative folder structures, make sure you adjust the 
 * ./module path. Failing to do so will cause errors.
 *
 */

define(['./module'], function(baseServices) {
  'use strict';
  baseServices.factory('HdExampleFactory', function () {
    console.log('baseService Factory');
    return {
      exampleMethod: function () {
        console.log('Example Method');
      }
    };
  });
});


