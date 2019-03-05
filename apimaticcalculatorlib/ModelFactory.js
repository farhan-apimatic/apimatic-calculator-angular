/**
 * APIMATICCalculatorLib
 *
 * This file was automatically generated for testing by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';
angular.module('APIMATICCalculatorLib')
    .factory('ModelFactory', ['NewRequest', 'DATA', 'New', 'Advance',ModelFactory]);

	/**
	 * Factory service to create instances of models and exception classes
	 */
    function ModelFactory(NewRequest, DATA, New, Advance) {

		var classMap = {
            NewRequest: NewRequest,
            DATA: DATA,
            New: New,
            Advance: Advance
		};

		return {
		    /**
		     * Creates instance of a model class
		     * @param  modelName  {string}  Name of class to instantiate
		     * @returns  {object} Instance of the model class
		     */
			getInstance: function(modelName) {
        		return new classMap[modelName]();
			}
		};
	}

}(angular));
