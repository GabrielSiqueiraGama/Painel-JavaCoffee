import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

import { HttpClient } from '@angular/common/http';
import {delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  findById(arg0: string): import("@angular/router").MaybeAsync<Produto | import("@angular/router").RedirectCommand> {
    throw new Error('Method not implemented.');
  }

  private readonly API = 'http://localhost:8080/api/produto';

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
  save(record: Partial<Produto>) {
    console.log(record);
    if(record._id){
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }
  private create(record: Partial<Produto>) {
    return this.httpClient.post<Produto>(this.API, record).pipe(first());
  }
  private update(record: Partial<Produto>){
    return this.httpClient.put<Produto>(`${this.API}/${record._id}`, record).pipe(first());
  }
  delete(id: number){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
