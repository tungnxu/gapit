import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { QueryResultBase } from '../types/models'

export abstract class BaseApi {
    protected baseUrl: string

    constructor(protected httpClient: HttpClient) { }

    protected setEndpoint(hostUrl: string, endpoint: string) {
        if (endpoint.startsWith('/')) {
            endpoint = endpoint.replace(/^\/+/, '')
        }
        if (endpoint.endsWith('/')) {
            endpoint = endpoint.replace(/\/+$/, '')
        }
        if (hostUrl.endsWith('/')) {
            hostUrl = hostUrl.replace(/\/+$/, '')
        }
        this.baseUrl = `${hostUrl}/${endpoint}`
    }

    protected createParams(params: { [key: string]: any }): HttpParams {
        return Object.keys(params).reduce((m, k) => {
            if (params[k] != null) {
                return m.set(k, params[k].toString())
            }
            return m
        }, new HttpParams())
    }

    protected createUrl(url: string, upgrade: boolean = false) {
        if (!url.startsWith('/')) {
            url = '/' + url
        }
        return this.baseUrl.replace('/v1/', upgrade ? '/v2/' : '/v1/') + url
    }

    protected getWPQueryResult<T>(res): Observable<QueryResultBase<T>> {
        const result: QueryResultBase<T> = {
            count: res.headers.get('X-WP-Total'),
            items: res.body
        }
        return of(result)
    }
}