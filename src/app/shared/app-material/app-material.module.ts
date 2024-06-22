import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  exports:[
    MatCardModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
