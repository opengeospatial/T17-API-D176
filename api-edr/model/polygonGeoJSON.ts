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


