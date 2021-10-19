/**
 * Daraa
 * This data store is offered by CubeWerx Inc. as a demonstration of its in-progress OGC API implementation.
 *
 * The version of the OpenAPI document: 9.3.52
 * Contact: mgalluch@cubewerx.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CollectionInfoJson } from './collectionInfoJson';


/**
 * This schema defines the JSON metadata resource representing a theme.
 */
export interface ThemeJson { 
    id: string;
    title?: string;
    description?: string;
    themes: Array<ThemeJson>;
    collections: Array<CollectionInfoJson>;
}

