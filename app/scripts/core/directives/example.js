/**
 * Example Directive for the coreDirectives.
 *
 * We load the module file in order to inject the coreDirectives module.
 * Using the headlessCore Path defined in boot.js
 */

define(['headlessCore/directives/module'], function(coreDirectives) {
  'use strict';
  coreDirectives.directive('ExampleDirective', function (hdExampleFactory) {
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

