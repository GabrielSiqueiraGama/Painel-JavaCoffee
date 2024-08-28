import { ResolveFn } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutosService } from '../services/produtos.service';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';

export const produtosResolver: ResolveFn<Observable<Produto>> = (route, state,  service: ProdutosService = inject(ProdutosService)) => {

  if (route.params?.['id']){
    return service.loadById(route.params['id']);
  }
  return of({  _id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    imagem: '',
    categoria: ''
    });
};
