/**
 * DGGS 1.0 server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.19-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface LinestringGeoJSON { 
    type: LinestringGeoJSON.TypeEnum;
    coordinates: Array<Array<number>>;
}
export namespace LinestringGeoJSON {
    export type TypeEnum = 'LineString';
    export const TypeEnum = {
        LineString: 'LineString' as TypeEnum
    };
}


