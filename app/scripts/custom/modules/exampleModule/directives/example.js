/**
 * Example Directive for the custom directives.
 *
 * We load the ./module file in order to load inject headlessDrupal.directives 
 * module.
 * 
 * If you are creating alternative folder structures, make sure you adjust the 
 * ./module file path. Failing to do so will cause errors.
 *
 */

define(['../../../directives/module'], function(directives) {
  'use strict';
  directives.directive('ExampleDirective', function ($scope) {
    return {
      restrict: 'A',
      controller: function () {
        console.log('headlessDrupal.directives Directive');
        console.log($scope);
      },
      link: function (scope) {
        console.log('Custom Directive link.');
      }
    };
  });
});
