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

import { LandingPageJson } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

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
     * The OGC API landing page for this data store.
     * @param f A token indicating the content type to return.  Overrides the HTTP \&quot;Accept\&quot; header if present.
     * @param pretty Whether or not the output should be pretty-formatted (with whitespace, etc.).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public rootGet(f?: 'json' | 'xml' | 'html', pretty?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/xml' | 'text/html' | 'application/problem+json', context?: HttpContext}): Observable<LandingPageJson>;
    public rootGet(f?: 'json' | 'xml' | 'html', pretty?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/xml' | 'text/html' | 'application/problem+json', context?: HttpContext}): Observable<HttpResponse<LandingPageJson>>;
    public rootGet(f?: 'json' | 'xml' | 'html', pretty?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/xml' | 'text/html' | 'application/problem+json', context?: HttpContext}): Observable<HttpEvent<LandingPageJson>>;
    public rootGet(f?: 'json' | 'xml' | 'html', pretty?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/xml' | 'text/html' | 'application/problem+json', context?: HttpContext}): Observable<any> {

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
                'text/xml',
                'text/html',
                'application/problem+json'
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

        return this.httpClient.get<LandingPageJson>(`${this.configuration.basePath}/`,
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
