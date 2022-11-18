import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fundo } from './fundo';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

const API = 'http://localhost:8080/api/';

@Injectable({ providedIn: 'root' })
export class FundoService {

  constructor(private http: HttpClient) { }

  listJsonFundo() {
    return this.http.get<Fundo[]>(API+'fundos')
  }

  listarTodos(): Observable<[any]> { return this.http.get<[any]>(API+ 'listar'); };


}

