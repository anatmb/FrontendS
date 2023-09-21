import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PersonaEmpleado } from '../model/PersonaEmpleado.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceTsService {
  URL = 'http://localhost:8080/Empleado/';
  constructor(private httpClient: HttpClient) { }

  public traer(): Observable<PersonaEmpleado[]> {
    return this.httpClient.get<PersonaEmpleado[]>(this.URL + 'traer');
  }

   public borrar(id: number): Observable<any> {
     return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
   }

   public create(persona: PersonaEmpleado): Observable<any> {
     return this.httpClient.post(this.URL + `nuevo`, persona, { responseType: 'text' });
   }

   public detail(id: number): Observable<PersonaEmpleado> {
     return this.httpClient.get<PersonaEmpleado>(this.URL + `detail/${id}`);
   }

   public actualizar(id: number, persona: PersonaEmpleado): Observable<any> {
     console.log('onupdate', persona);
     return this.httpClient.put(this.URL + `actualizar/${id}`, persona, { responseType: 'text' });
   }
   public filtrar(_textoDeInput: string): Observable<PersonaEmpleado[]> {
    return this.httpClient.get<PersonaEmpleado[]>(this.URL + `search/${_textoDeInput}`);

   }
}



