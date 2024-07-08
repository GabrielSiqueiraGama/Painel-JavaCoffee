import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

import { HttpClient } from '@angular/common/http';
import {Observable, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = 'http://localhost:8080/api/cardapio';

  constructor(public httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Produto[]>(this.API).pipe(
      tap(produtos => console.log(produtos)),
      delay(1000)
    );
  }
  save(produtos: Partial<Produto>) :Observable<Produto>{
    return this.httpClient.post<Produto>(this.API, produtos);
  }
}
