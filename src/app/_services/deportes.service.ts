import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Deporte } from "@app/_models/deportes";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@environments/environment";
import { GlobalService } from "@app/_services/global.service";

@Injectable({
  providedIn: "root"
})
export class DeportesService {
  constructor(private http: HttpClient, private global: GlobalService) {}

  //TODO: Implementar este método. Ver ejemplo de Electivas para hacer fetch de una tabla de AirTable.
  getAll(): Observable<Deporte[]> {
    const headers = this.global.httpHeaders;
    return this.http.get<any[]>(`${environment.apiUrl}/api/deportes/getAll`, {
      headers
    });
  }
}
