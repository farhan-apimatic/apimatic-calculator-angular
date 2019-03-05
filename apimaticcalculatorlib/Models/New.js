/**
 * APIMATICCalculatorLib
 *
 * This file was automatically generated for testing by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of New
 *
 * @constructor
 */
angular.module('APIMATICCalculatorLib')
    .factory('New', ['BaseModel', NewModel]);

    function NewModel(BaseModel) {
        var New = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.counter = this.getValue(obj.counter);
            this.advance = this.getValue(obj.advance);
        };

        New.prototype = new BaseModel();
        New.prototype.constructor = New;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        New.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'counter', realName: 'counter' },
                { name: 'advance', realName: 'advance', type: 'Advance' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        New.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        New.prototype.getCounter = function () {
            return this.counter;
        };
    
        /**
         * Setter for Counter
         * 
         * @param {int} value 
         */
        New.prototype.setCounter = function (value) {
            this.counter = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {Advance}
         */
        New.prototype.getAdvance = function () {
            return this.advance;
        };
    
        /**
         * Setter for Advance
         * 
         * @param {Advance} value 
         */
        New.prototype.setAdvance = function (value) {
            this.advance = value;
        };
    
        return New;
    }

}(angular));
