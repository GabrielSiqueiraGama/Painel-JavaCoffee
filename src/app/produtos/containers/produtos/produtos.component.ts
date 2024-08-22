
import { Component } from '@angular/core';

import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute, Router } from '@angular/router';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { CategoriaPipe } from '../../../shared/pipes/categoria.pipe';
import { ProdutosService } from '../../services/produtos.service';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Produto } from '../../models/produto';
import { ProdutosListaComponent } from '../../components/produtos-lista/produtos-lista.component';


@Component({
    selector: 'app-produtos',
    standalone: true,
    templateUrl: './produtos.component.html',
    styleUrl: './produtos.component.scss',
    imports: [
        AppMaterialModule,
        CategoriaPipe,
        ProdutosListaComponent
    ]
})
export default class ProdutosComponent {

  produtos$: Observable<Produto[]>;

  constructor(
    private produtosService: ProdutosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ){

    this.produtos$ = this.produtosService.list().pipe(
      catchError(error =>{
        this.onError('Erro ao carregar os produtos');
        return of ([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd() {

    this.router.navigate(['new'],{relativeTo: this.route});
} ;
}
