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
import { ThemeJson } from './themeJson';
import { CollectionInfoJson } from './collectionInfoJson';


/**
 * This schema defines the JSON metadata resource returned from the /themes endpoint, providing the set of top-level themes and collections.
 */
export interface ThemesJson { 
    links: Array<LinkJson>;
    themes: Array<ThemeJson>;
    collections: Array<CollectionInfoJson>;
}

