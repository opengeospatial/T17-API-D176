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
import { GeometryGeoJSON } from './geometryGeoJSON';
import { Link } from './link';


export interface FeatureGeoJSON { 
    type: FeatureGeoJSON.TypeEnum;
    geometry: GeometryGeoJSON;
    properties: object | null;
    id?: string | number | null;
    links?: Array<Link>;
}
export namespace FeatureGeoJSON {
    export type TypeEnum = 'Feature';
    export const TypeEnum = {
        Feature: 'Feature' as TypeEnum
    };
}

