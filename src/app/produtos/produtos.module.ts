import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    AppMaterialModule
  ]
})
export class ProdutosModule { }
