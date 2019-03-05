import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GlobalService} from '@app/_services/global.service';

@Injectable({
  providedIn: 'root'
})
export class ElectivasService {

  constructor(private http: HttpClient, private global: GlobalService) { }

  getByCarrera(carrera: string) {
    const headers = this.global.httpHeaders;
    const params = new HttpParams().append('carrera', carrera);

    return this.http.get<any[]>(`/api/electivas/get`, {headers, params});
  }

}
