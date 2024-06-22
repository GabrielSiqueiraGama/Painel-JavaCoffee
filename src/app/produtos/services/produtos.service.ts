import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '../../../assets/produtos.json'

  constructor(public httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Produto[]>(this.API);
  }
}
