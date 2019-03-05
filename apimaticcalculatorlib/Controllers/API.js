/**
 * APIMATICCalculatorLib
 *
 * This file was automatically generated for testing by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('APIMATICCalculatorLib')
    .factory('API', ['$q', 'Configuration', 'HttpClient', 'APIHelper', 'BaseController', API
    ]);

    function API($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * @todo Add general description for this endpoint
             *
             * @param {NewRequest} body TODO: type description here
             * @param {string} cacheControl TODO: type description here
             * @param {string} contentType TODO: type description here
             * @param {string} postmanToken TODO: type description here
             *
             * @return {promise<Dynamic>}
             */
            new: function (body, cacheControl, contentType, postmanToken) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/1.1/test.php';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
                    'content-type': contentType,
                    'cache-control': cacheControl,
                    'postman-token': postmanToken,
                    'gfdsfkl': Configuration.gfdsfkl,
                    'dsfsdf': Configuration.dsfsdf
                };

                // Remove null values
                APIHelper.cleanObject(body);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    body: body.toJSON()
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));
