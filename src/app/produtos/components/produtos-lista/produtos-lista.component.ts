import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { Produto } from '../../models/produto';
import { CategoriaPipe } from '../../../shared/pipes/categoria.pipe';

@Component({
  selector: 'app-produtos-lista',
  standalone: true,
  imports: [AppMaterialModule, CategoriaPipe],
  templateUrl: './produtos-lista.component.html',
  styleUrl: './produtos-lista.component.scss'
})
export class ProdutosListaComponent {

  @Input() produtos: Produto[] =[];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['_id', 'nome', 'descricao', 'preco', 'imagem', 'categoria', 'actions'];

  constructor(){}

  onAdd() {
    this.add.emit(true);
  }
  onEdit(produto: Produto){
    this.edit.emit(produto);
  }
}
