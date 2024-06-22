import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Produto } from './models/produto';
@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  produtos: Produto[] = [
    {_id: 1, nome: 'Cafe', descricao: 'lorem', preco: 10, imagem: 'Link ficticio'},
  ];

  readonly displayedColumns = ['_id', 'nome', 'descricao', 'preco', 'imagem'];
  constructor(){
  }


}
