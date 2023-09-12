import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/Login-usuario';
import { Usuario } from '../model/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/Usuario/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: Usuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }
 
  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}
