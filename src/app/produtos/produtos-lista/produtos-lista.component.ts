import { Component, Input } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Produto } from '../models/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaPipe } from '../../shared/pipes/categoria.pipe';

@Component({
  selector: 'app-produtos-lista',
  standalone: true,
  imports: [AppMaterialModule, CategoriaPipe],
  templateUrl: './produtos-lista.component.html',
  styleUrl: './produtos-lista.component.scss'
})
export class ProdutosListaComponent {

  @Input() produtos: Produto[] =[];

  readonly displayedColumns = ['_id', 'nome', 'descricao', 'preco', 'imagem', 'categoria', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  onAdd() {

    this.router.navigate(['new'],{relativeTo: this.route});
}
}
