import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL = 'http://localhost:8080/intranetsima/';
  constructor(private httpClient: HttpClient) { }


  public traer(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL + 'traer');
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public create(persona: Persona): Observable<any> {
    return this.httpClient.post(this.URL + `create`, persona, { responseType: 'text' });
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  public actualizar(id: number, persona: Persona): Observable<any> {
    console.log('onupdate', persona);
    return this.httpClient.put(this.URL + `actualizar/${id}`, persona, { responseType: 'text' });
  }
}
