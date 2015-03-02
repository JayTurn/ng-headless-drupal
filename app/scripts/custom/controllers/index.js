/**
 * Defines the controllers to be attached to the headlessDrupal.controllers.
 *
 * Using a ./ file path looks relative to the module definition. If files aren't
 * stored directly in the same foler, we need to use a full path, relative to
 * the /app folder.
 */
define([
  'scripts/custom/modules/exampleModule/controllers/example.js',
  './mainExtend'
], function () {});

