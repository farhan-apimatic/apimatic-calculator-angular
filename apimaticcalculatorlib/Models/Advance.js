/**
 * APIMATICCalculatorLib
 *
 * This file was automatically generated for testing by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Advance
 *
 * @constructor
 */
angular.module('APIMATICCalculatorLib')
    .factory('Advance', ['BaseModel', AdvanceModel]);

    function AdvanceModel(BaseModel) {
        var Advance = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.latitude = this.getValue(obj.latitude);
            this.longitude = this.getValue(obj.longitude);
        };

        Advance.prototype = new BaseModel();
        Advance.prototype.constructor = Advance;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Advance.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'latitude', realName: 'latitude' },
                { name: 'longitude', realName: 'longitude' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Advance.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {double}
         */
        Advance.prototype.getLatitude = function () {
            return this.latitude;
        };
    
        /**
         * Setter for Latitude
         * 
         * @param {double} value 
         */
        Advance.prototype.setLatitude = function (value) {
            this.latitude = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {double}
         */
        Advance.prototype.getLongitude = function () {
            return this.longitude;
        };
    
        /**
         * Setter for Longitude
         * 
         * @param {double} value 
         */
        Advance.prototype.setLongitude = function (value) {
            this.longitude = value;
        };
    
        return Advance;
    }

}(angular));
