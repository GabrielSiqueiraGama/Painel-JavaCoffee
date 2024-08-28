import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

import { HttpClient } from '@angular/common/http';
import {Observable, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  findById(arg0: string): import("@angular/router").MaybeAsync<Produto | import("@angular/router").RedirectCommand> {
    throw new Error('Method not implemented.');
  }

  private readonly API = 'http://localhost:8080/api/cardapio';

  constructor(public httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Produto[]>(this.API).pipe(
      tap(produtos => console.log(produtos)),
      delay(1000)
    );
  }

  loadById(id: number){
    return this.httpClient.get<Produto>(`${this.API}/${id}`)
  }
  save(produtos: Partial<Produto>) :Observable<Produto>{
    return this.httpClient.post<Produto>(this.API, produtos);
  }
}
