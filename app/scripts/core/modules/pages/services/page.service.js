/**
 * Page factory to manage page requests.
 */

define(['headlessCore/services/module'], function(coreServices) {
  'use strict';
  coreServices.factory('Page', function (DrupalApi, DRUPAL_URL, SETTINGS, $q) {
    console.log('Page Service');
    return {
      getPage: function (path) {
        var deferred = $q.defer(),
            payload = {};

        // If we are making a request from the home page, override the path to 
        // point to the Drupal defined home page path.
        path = (path === '/') ? SETTINGS.homePath : path;

        // Set the payload url.
        payload.url = DRUPAL_URL + '/' + path;

        DrupalApi.getRequest(payload, 
          function (response) {
            deferred.resolve(response);
          },
          function (error) {
            deferred.reject(error);
          });  

        return deferred.promise;
        console.log(path);
        // Make the request for the page.
        console.log('Example Method');
      }
    };
  });
});
