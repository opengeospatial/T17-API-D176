/**
 * Daraa
 * This data store is offered by CubeWerx Inc. as a demonstration of its in-progress OGC API implementation.
 *
 * The version of the OpenAPI document: 9.3.62
 * Contact: mgalluch@cubewerx.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LinkJson } from './linkJson';


export interface Tileset { 
    tileMatrixSetURI?: string;
    tileMatrixSetDefinition?: string;
    wellKnownScaleSet?: string;
    dataType?: Tileset.DataTypeEnum;
    links: Array<LinkJson>;
}
export namespace Tileset {
    export type DataTypeEnum = 'map' | 'vector' | 'coverage';
    export const DataTypeEnum = {
        Map: 'map' as DataTypeEnum,
        Vector: 'vector' as DataTypeEnum,
        Coverage: 'coverage' as DataTypeEnum
    };
}


