import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'produtos',

 children: [
      {
        path: '',
        loadComponent: () => import('./produtos/produtos.component')
      },
      {
        path: 'new',
        loadComponent: () => import('./produtos/produtos-form/produtos-form.component'),
      }
    ],

  }
];
