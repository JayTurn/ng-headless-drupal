/**
 * Drupal API service to connect to a drupal site.
 *
 * Relies on the DRUPAL_URL constant being set for the API connect.
 * 
 */

define(['headlessCore/services/module'], function(coreServices) {
  'use strict';
  coreServices.factory('DrupalApi', function (DRUPAL_URL, $http, $q) {
    console.log('coreService Factory');
    console.log(DRUPAL_URL);
    return {
      /**
       * Sets up the GET request.
       *
       * @param {object} options
       *   The invoking function's options passed to the request.
       * @param {function} success
       *   The success callback to be invoked on successful request.
       * @param {function} error
       *   The error callback to be invoked on failed request.
       */
      getRequest: function (options, success, error) {
        // Set the default request options.
        var request = {
              method : 'GET',
              headers : {
                'Content-Type' : 'application/json'
              }
            };

        // Extend the request with those passed in by the invoking method.
        request = angular.extend(request, options);
        console.log(this);

        return this.sendRequest(request, success, error);
      },

      sendRequest: function (request, success, error) {
        var  deferred = $q.defer();

        // Make the http request.
        $http(request)
          .success(function (data) {
            console.log('http success');
            console.log(data);
            deferred.resolve(success(data));
          })
          .error(function (data) {
            console.log('http error');
            deferred.reject(error(data));
          });

        return deferred.promise;
      }
    };
  });
});



