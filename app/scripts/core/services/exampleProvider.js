/**
 * Example Provider for the coreServices.
 *
 * We load the module file in order to inject the coreServices module.
 * Using the headlessCore Path defined in boot.js
 */

define(['headlessCore/services/module'], function(coreServices) {
  'use strict';
  coreServices.provider('HdExampleProvider', function () {
    console.log('coreService Provider');
    var hdExampleP = {};

    hdExampleP.example = function () {
      return 'headlessDrupal Provider Example';
    };

    this.$get = function () {
      return hdExampleP;
    };
  });
});


