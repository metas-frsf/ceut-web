import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { GlobalService } from "@app/_services/global.service";

@Injectable({
  providedIn: "root",
})
export class PadronService {
  constructor(private http: HttpClient, private global: GlobalService) {}

  consultar(dni: string) {
    const headers = this.global.httpHeaders;
    return this.http.get<any[]>(`api/electoral-register`, {
      headers,
    });
  }

  getPadron() {
    const headers = this.global.httpHeaders;
    return this.http.get<any[]>(`api/electoral-register`, {
      headers,
    });
  }
}
