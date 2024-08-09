import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { MatDialogContent } from '@angular/material/dialog';
import { CategoriaPipe } from '../shared/pipes/categoria.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    ProdutosRoutingModule,
    SharedModule,
    MatDialogContent,
    CategoriaPipe,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
