import { ProdutosService } from './services/produtos.service';
import { Component } from '@angular/core';
import { Produto } from './models/produto';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { Observable } from 'rxjs';

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

  produtos$: Observable<Produto[]>;

  readonly displayedColumns = ['_id', 'nome', 'descricao', 'preco', 'imagem'];


  constructor( private produtosService: ProdutosService){
    this.produtos$ = this.produtosService.list();
  }

}
