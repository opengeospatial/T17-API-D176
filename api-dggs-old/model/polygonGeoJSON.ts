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


export interface PolygonGeoJSON { 
    type: PolygonGeoJSON.TypeEnum;
    coordinates: Array<Array<Array<number>>>;
}
export namespace PolygonGeoJSON {
    export type TypeEnum = 'Polygon';
    export const TypeEnum = {
        Polygon: 'Polygon' as TypeEnum
    };
}

