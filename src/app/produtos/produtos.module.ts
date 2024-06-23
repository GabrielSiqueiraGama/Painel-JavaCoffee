import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { MatDialogContent } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    ProdutosRoutingModule,
    SharedModule,
    MatDialogContent,
  ]
})
export class ProdutosModule { }
