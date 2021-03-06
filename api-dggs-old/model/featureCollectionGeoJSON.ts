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
import { FeatureGeoJSON } from './featureGeoJSON';
import { Link } from './link';


export interface FeatureCollectionGeoJSON { 
    type: FeatureCollectionGeoJSON.TypeEnum;
    features: Array<FeatureGeoJSON>;
    links?: Array<Link>;
    /**
     * This property indicates the time and date when the response was generated.
     */
    timeStamp?: string;
    /**
     * The number of features of the feature type that match the selection parameters like `bbox`.
     */
    numberMatched?: number;
    /**
     * The number of features in the feature collection.  A server may omit this information in a response, if the information about the number of features is not known or difficult to compute.  If the value is provided, the value shall be identical to the number of items in the \"features\" array.
     */
    numberReturned?: number;
}
export namespace FeatureCollectionGeoJSON {
    export type TypeEnum = 'FeatureCollection';
    export const TypeEnum = {
        FeatureCollection: 'FeatureCollection' as TypeEnum
    };
}


