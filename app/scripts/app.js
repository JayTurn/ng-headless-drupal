/**
 * Defines App dependencies for the headlessDrupal module.
 */
define([
  'angular',
  'headlessBase/controllers/index',
  'headlessBase/directives/index',
  'headlessBase/services/index',
  'headlessCustom/controllers/index',
  'headlessCustom/directives/index',
  'headlessCustom/services/index',
  //'config',
  'ngResource',
  'ngCookies',
  'ngSanitize',
  'ngBootstrap',
  'duScroll',
  'ngRoute'
], function(angular, controllers, directives, services, config) {
  'use strict';
  return angular.module('wiggedy', [
    'headlessDrupal.baseControllers',
    'headlessDrupal.baseDirectives',
    'headlessDrupal.baseServices',
    'headlessDrupal.controllers',
    'headlessDrupal.directives',
    'headlessDrupal.services',
    'ngRoute',
    //'config',
    'ngResource',
    'ngCookies',
    'ngSanitize',
    'ngDreamFactory',
    'ui.bootstrap',
    'duScroll',
  ]);
});

