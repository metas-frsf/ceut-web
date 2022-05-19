import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Deporte } from "@app/_models/deportes";
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "@app/_services/global.service";

const apiPrefix: string = "api/sports";

@Injectable({
  providedIn: "root",
})
export class DeportesService {
  constructor(private http: HttpClient, private global: GlobalService) {}

  getAll(): Observable<Deporte[]> {
    const headers = this.global.httpHeaders;
    return this.http.get<any[]>(`${apiPrefix}/get`, {
      headers,
    });
  }
}
