import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fecha } from '../model/Fecha.model';

@Injectable({
  providedIn: 'root'
})
export class FechaService {
  URL = 'http://localhost:8080/Fecha/';
  constructor(private httpClient: HttpClient) { }
  public create(fecha: Fecha): Observable<any> {
    return this.httpClient.post(this.URL + `nuevo`, fecha, { responseType: 'text' });
  }
}

