import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatDialogContent } from '@angular/material/dialog';
import { CategoriaPipe } from './pipes/categoria.pipe';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    ErrorDialogComponent,
    MatDialogContent,
    CategoriaPipe,
    ConfirmationComponent
  ],
  exports: [
    ErrorDialogComponent,
    CategoriaPipe,
    ConfirmationComponent
  ]
})
export class SharedModule { }
