import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumos } from './consumos';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ConsumosService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDaEmpresa(cnpj: string): Observable<Consumos>{
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token',token);
    return this.http.get<Consumos>(`${API}/${cnpj}/photos`,{
      headers
    });
  }
}
