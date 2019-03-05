/**
 * APIMATICCalculatorLib
 *
 * This file was automatically generated for testing by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of DATA
 *
 * @constructor
 */
angular.module('APIMATICCalculatorLib')
    .factory('DATA', ['BaseModel', DATAModel]);

    function DATAModel(BaseModel) {
        var DATA = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.latitude = this.getValue(obj.latitude);
            this.longitude = this.getValue(obj.longitude);
        };

        DATA.prototype = new BaseModel();
        DATA.prototype.constructor = DATA;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        DATA.prototype.mappingInfo = function() {
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
        DATA.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {double}
         */
        DATA.prototype.getLatitude = function () {
            return this.latitude;
        };
    
        /**
         * Setter for Latitude
         * 
         * @param {double} value 
         */
        DATA.prototype.setLatitude = function (value) {
            this.latitude = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {double}
         */
        DATA.prototype.getLongitude = function () {
            return this.longitude;
        };
    
        /**
         * Setter for Longitude
         * 
         * @param {double} value 
         */
        DATA.prototype.setLongitude = function (value) {
            this.longitude = value;
        };
    
        return DATA;
    }

}(angular));
