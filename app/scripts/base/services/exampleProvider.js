/**
 * Example Provider for the baseServices.
 *
 * We load the ./module file in order to load inject baseServices module.
 * 
 * If you are creating alternative folder structures, make sure you adjust the 
 * ./module path. Failing to do so will cause errors.
 *
 */

define(['./module'], function(baseServices) {
  'use strict';
  baseServices.provider('HdExampleProvider', function () {
    console.log('baseService Provider');
    var hdExampleP = {};

    hdExampleP.example = function () {
      return 'headlessDrupal Provider Example';
    };

    this.$get = function () {
      return hdExampleP;
    };
  });
});


