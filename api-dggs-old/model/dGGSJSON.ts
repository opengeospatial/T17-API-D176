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
import { Link } from './link';


export interface DGGSJSON { 
    id: string | number | null;
    type: DGGSJSON.TypeEnum;
    /**
     * The geometry of the feature, as a list of DGGS zone ids
     */
    geometry: Array<string>;
    properties: object | null;
    links?: Array<Link>;
}
export namespace DGGSJSON {
    export type TypeEnum = 'Feature';
    export const TypeEnum = {
        Feature: 'Feature' as TypeEnum
    };
}


