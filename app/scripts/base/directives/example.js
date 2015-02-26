/**
 * Example Directive for the baseDirectives.
 *
 * We load the ./module file in order to load inject baseDirectives module.
 * 
 * If you are creating alternative folder structures, make sure you adjust the 
 * ./module path. Failing to do so will cause errors.
 *
 */

define(['./module'], function(baseDirectives) {
  'use strict';
  baseDirectives.directive('ExampleDirective', function (hdExampleFactory) {
    return {
      restrict: 'A',
      controller: function ($scope, hdExampleFactory) {
        $scope.test = hdExampleFactory();
      },
      link: function (scope) {
        console.log(scope.test);
      }
    };
  });
});

