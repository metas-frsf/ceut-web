import { Injectable } from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _httpHeaders = new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
  private _webApiUrl = ``;

  constructor() { }

  get httpHeaders(): HttpHeaders {
    return this._httpHeaders;
  }

  set httpHeaders(value: HttpHeaders) {
    this._httpHeaders = value;
  }

  get webApiUrl(): string {
    return this._webApiUrl;
  }

  set webApiUrl(value: string) {
    this._webApiUrl = value;
  }

  /**
   * Genera un orden aleatorio
   */
  shuffleOrder(): number {
    return .5 - Math.random();
  }


}
