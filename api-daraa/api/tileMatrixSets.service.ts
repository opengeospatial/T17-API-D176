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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class TileMatrixSetsService {

    protected basePath = 'https://test.cubewerx.com/cubewerx/cubeserv/demo/ogcapi/Daraa';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * The tile-matrix sets available in this data store.
     * @param f A token indicating the content type to return.  Overrides the HTTP \&quot;Accept\&quot; header if present.
     * @param pretty Whether or not the output should be pretty-formatted (with whitespace, etc.).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tileMatrixSetsGet(f?: 'json' | 'html', pretty?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/html' | 'application/problem+json' | 'text/xml', context?: HttpContext}): Observable<any>;
    public tileMatrixSetsGet(f?: 'json' | 'html', pretty?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/html' | 'application/problem+json' | 'text/xml', context?: HttpContext}): Observable<HttpResponse<any>>;
    public tileMatrixSetsGet(f?: 'json' | 'html', pretty?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/html' | 'application/problem+json' | 'text/xml', context?: HttpContext}): Observable<HttpEvent<any>>;
    public tileMatrixSetsGet(f?: 'json' | 'html', pretty?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/html' | 'application/problem+json' | 'text/xml', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (f !== undefined && f !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>f, 'f');
        }
        if (pretty !== undefined && pretty !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>pretty, 'pretty');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (cwApiKeyHeader) required
        localVarCredential = this.configuration.lookupCredential('cwApiKeyHeader');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('CubeWerx-API-Key', localVarCredential);
        }

        // authentication (cwApiKeyQuery) required
        localVarCredential = this.configuration.lookupCredential('cwApiKeyQuery');
        if (localVarCredential) {
            localVarQueryParameters = localVarQueryParameters.set('apiKey', localVarCredential);
        }

        // authentication (cwAuth) required
        localVarCredential = this.configuration.lookupCredential('cwAuth');
        if (localVarCredential) {
        }

        // authentication (httpBearer) required
        localVarCredential = this.configuration.lookupCredential('httpBearer');
        if (localVarCredential) {
        }

        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/html',
                'application/problem+json',
                'text/xml'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<any>(`${this.configuration.basePath}/tileMatrixSets`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * A tile-matrix set in this data store.
     * @param tileMatrixSetId The identifier of a tile-matrix set in this data store.
     * @param f A token indicating the content type to return.  Overrides the HTTP \&quot;Accept\&quot; header if present.
     * @param pretty Whether or not the output should be pretty-formatted (with whitespace, etc.).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tileMatrixSetsTileMatrixSetIdGet(tileMatrixSetId: 'wgs84' | '3395' | 'smerc', f?: 'json' | 'html', pretty?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/html' | 'application/problem+json' | 'text/xml', context?: HttpContext}): Observable<any>;
    public tileMatrixSetsTileMatrixSetIdGet(tileMatrixSetId: 'wgs84' | '3395' | 'smerc', f?: 'json' | 'html', pretty?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/html' | 'application/problem+json' | 'text/xml', context?: HttpContext}): Observable<HttpResponse<any>>;
    public tileMatrixSetsTileMatrixSetIdGet(tileMatrixSetId: 'wgs84' | '3395' | 'smerc', f?: 'json' | 'html', pretty?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/html' | 'application/problem+json' | 'text/xml', context?: HttpContext}): Observable<HttpEvent<any>>;
    public tileMatrixSetsTileMatrixSetIdGet(tileMatrixSetId: 'wgs84' | '3395' | 'smerc', f?: 'json' | 'html', pretty?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/html' | 'application/problem+json' | 'text/xml', context?: HttpContext}): Observable<any> {
        if (tileMatrixSetId === null || tileMatrixSetId === undefined) {
            throw new Error('Required parameter tileMatrixSetId was null or undefined when calling tileMatrixSetsTileMatrixSetIdGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (f !== undefined && f !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>f, 'f');
        }
        if (pretty !== undefined && pretty !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>pretty, 'pretty');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (cwApiKeyHeader) required
        localVarCredential = this.configuration.lookupCredential('cwApiKeyHeader');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('CubeWerx-API-Key', localVarCredential);
        }

        // authentication (cwApiKeyQuery) required
        localVarCredential = this.configuration.lookupCredential('cwApiKeyQuery');
        if (localVarCredential) {
            localVarQueryParameters = localVarQueryParameters.set('apiKey', localVarCredential);
        }

        // authentication (cwAuth) required
        localVarCredential = this.configuration.lookupCredential('cwAuth');
        if (localVarCredential) {
        }

        // authentication (httpBearer) required
        localVarCredential = this.configuration.lookupCredential('httpBearer');
        if (localVarCredential) {
        }

        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/html',
                'application/problem+json',
                'text/xml'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<any>(`${this.configuration.basePath}/tileMatrixSets/${encodeURIComponent(String(tileMatrixSetId))}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
