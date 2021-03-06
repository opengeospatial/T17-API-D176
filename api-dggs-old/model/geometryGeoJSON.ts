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
import { MultipolygonGeoJSON } from './multipolygonGeoJSON';
import { GeometrycollectionGeoJSON } from './geometrycollectionGeoJSON';
import { MultilinestringGeoJSON } from './multilinestringGeoJSON';
import { MultipointGeoJSON } from './multipointGeoJSON';
import { PointGeoJSON } from './pointGeoJSON';
import { PolygonGeoJSON } from './polygonGeoJSON';
import { LinestringGeoJSON } from './linestringGeoJSON';


/**
 * @type GeometryGeoJSON
 * @export
 */
export type GeometryGeoJSON = GeometrycollectionGeoJSON | LinestringGeoJSON | MultilinestringGeoJSON | MultipointGeoJSON | MultipolygonGeoJSON | PointGeoJSON | PolygonGeoJSON;

