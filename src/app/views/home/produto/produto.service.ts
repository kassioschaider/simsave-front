import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto';

const API = 'http://api.simsave.com.br/v1/test-api/home';

@Injectable({ providedIn: 'root' })
export class ProdutoService {

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Produto[]>(API);
  }
}
