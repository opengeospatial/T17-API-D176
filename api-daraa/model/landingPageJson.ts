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
import { LinkJson } from './linkJson';


/**
 * JSON schema for the OGC API - Common landing page.
 */
export interface LandingPageJson { 
  [key: string]: object | any;


    /**
     * The title of the API
     */
    title: string;
    /**
     * A textual description of the API
     */
    description?: string;
    /**
     * An attribution for the API.  It should be short and intended for presentation to a user, for example, in a corner of a map.  Parts of the text can be links to other resources if additional information is needed.  The string can include HTML markup.
     */
    attribution?: string;
    /**
     * Links to the resources exposed through this API.
     */
    links: Array<LinkJson>;
}
