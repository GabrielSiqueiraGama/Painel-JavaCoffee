import { Routes } from '@angular/router';
import { produtosResolver } from './produtos/guards/produtos.resolver';

export const routes: Routes = [

  {
    path: 'produtos',

 children: [
      {
        path: '',
        loadComponent: () => import('./produtos/containers/produtos/produtos.component')
      },
      {
        path: 'new',
        loadComponent: () => import('./produtos/containers/produtos-form/produtos-form.component'), resolve: { produto: produtosResolver }
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./produtos/containers/produtos-form/produtos-form.component'), resolve: {produto: produtosResolver},
      },
    ],

  }
];
