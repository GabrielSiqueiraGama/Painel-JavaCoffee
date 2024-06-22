import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/assets/produtos.json';

  constructor(public httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Produto[]>(this.API).pipe(
      tap(produtos => console.log(produtos)),
      delay(1000)
    );
  }
}
