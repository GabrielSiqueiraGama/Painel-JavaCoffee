import { Routes } from '@angular/router';

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
        loadComponent: () => import('./produtos/produtos-form/produtos-form.component'),
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./produtos/produtos-form/produtos-form.component'),
      },
    ],

  }
];
