/**
 * Defines App dependencies for the headlessDrupal module.
 */
define([
  'angular',
  'config',
  'headlessCore/controllers/index',
  'headlessCore/directives/index',
  'headlessCore/services/index',
  'headlessCustom/controllers/index',
  'headlessCustom/directives/index',
  'headlessCustom/services/index',
  'ngResource',
  'ngCookies',
  'ngSanitize',
  'ngBootstrap',
  'duScroll',
  'ngRoute'
], function(angular) {
  'use strict';
  console.log('headlessDrupalApp define');
  return angular.module('headlessDrupal', [
    'headlessDrupal.coreControllers',
    'headlessDrupal.coreDirectives',
    'headlessDrupal.coreServices',
    'headlessDrupal.controllers',
    //'headlessDrupal.directives',
    //'headlessDrupal.services',
    'ngRoute',
    'config',
    'ngResource',
    'ngCookies',
    'ngSanitize',
    'ui.bootstrap',
    'duScroll',
  ]);
});

