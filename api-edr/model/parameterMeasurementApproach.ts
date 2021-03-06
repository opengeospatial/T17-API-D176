/**
 * Environmental Data Retrieval API\'s
 * Example of Environmental Data Retrieval API OpenAPI docs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Approach to calculating the data values
 */
export interface ParameterMeasurementApproach { 
    method: string;
    /**
     * The time duration that the value was calculated for as an RFC3339 duration value.  If the method value is instantaneous this value is not required.
     */
    duration?: string;
}

