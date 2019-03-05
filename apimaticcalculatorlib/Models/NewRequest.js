/**
 * APIMATICCalculatorLib
 *
 * This file was automatically generated for testing by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of NewRequest
 *
 * @constructor
 */
angular.module('APIMATICCalculatorLib')
    .factory('NewRequest', ['BaseModel', NewRequestModel]);

    function NewRequestModel(BaseModel) {
        var NewRequest = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.counter = this.getValue(obj.counter);
            this.dATA = this.getValue(obj.dATA);
        };

        NewRequest.prototype = new BaseModel();
        NewRequest.prototype.constructor = NewRequest;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        NewRequest.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'counter', realName: 'counter' },
                { name: 'dATA', realName: 'DATA', type: 'DATA' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        NewRequest.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        NewRequest.prototype.getCounter = function () {
            return this.counter;
        };
    
        /**
         * Setter for Counter
         * 
         * @param {int} value 
         */
        NewRequest.prototype.setCounter = function (value) {
            this.counter = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {DATA}
         */
        NewRequest.prototype.getDATA = function () {
            return this.dATA;
        };
    
        /**
         * Setter for DATA
         * 
         * @param {DATA} value 
         */
        NewRequest.prototype.setDATA = function (value) {
            this.dATA = value;
        };
    
        return NewRequest;
    }

}(angular));
