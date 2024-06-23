import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatDialogContent } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    ErrorDialogComponent,
    MatDialogContent
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
