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


export interface Collection { 
    /**
     * Identifier of the collection. In case the identifier is a DGGS RS service, this will be the DGGS instance identifier, otherwise, the value is going to be the data collection id
     */
    id: string;
    /**
     * Identifiers of the DGGS instance. For DGGS RS services, the will be the same as the id, for DGGS Data services, dggs-id identifies the particular DGGS instance used.
     */
    dggs_id?: string;
    /**
     * Human readable title of the collection
     */
    title?: string;
    /**
     * A description of the collection
     */
    description?: string;
    resolutions?: Array<number>;
    /**
     * The list of links, e.g., to the operations provided by this DGGS collection.
     */
    links: Array<Link>;
}
