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


export interface PointGeoJSON { 
    type: PointGeoJSON.TypeEnum;
    coordinates: Array<number>;
}
export namespace PointGeoJSON {
    export type TypeEnum = 'Point';
    export const TypeEnum = {
        Point: 'Point' as TypeEnum
    };
}

