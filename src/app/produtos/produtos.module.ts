import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { MatDialogContent } from '@angular/material/dialog';
import { CategoriaPipe } from '../shared/pipes/categoria.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    ProdutosRoutingModule,
    SharedModule,
    MatDialogContent,
    CategoriaPipe
  ]
})
export class ProdutosModule { }
