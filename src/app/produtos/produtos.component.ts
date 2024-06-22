import { Component } from '@angular/core';
import { Produto } from './models/produto';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    AppMaterialModule
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
