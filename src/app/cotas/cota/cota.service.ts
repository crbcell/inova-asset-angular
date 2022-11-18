import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cota } from './cota';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

const API = 'http://localhost:8080/api/';

@Injectable({ providedIn: 'root' })
export class CotaService {

  constructor(private http: HttpClient) { }

  listJsonCota() {
    return this.http.get<Cota[]>(API+'cotas')
  }

  listarTodos(): Observable<[any]> { return this.http.get<[any]>(API+ 'listar'); };


}
