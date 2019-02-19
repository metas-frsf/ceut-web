import { Injectable } from '@angular/core';
import {GlobalService} from '@app/_services/global.service';
import {Observable} from 'rxjs';
import {RepairLegacy} from '@app/_models';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const headers = new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private endpoint = `/cliente.php`;

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  public getAllLegacy(): Observable<RepairLegacy> {
    const params = new HttpParams()
      .set('action', 'getAll');
    return this.http.get<RepairLegacy>(`${this.globalService.webApiUrl}${this.endpoint}`, {headers: headers, params: params});
  }
}
