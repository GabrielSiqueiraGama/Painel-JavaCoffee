import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../shared.module';
import { AppMaterialModule } from '../../app-material/app-material.module';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [ SharedModule, AppMaterialModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {

  readonly dialogRef = inject(MatDialogRef<ConfirmationComponent>);
  readonly data = inject<string>(MAT_DIALOG_DATA);
  readonly animal = model();

  onConfirm(result: boolean): void {
    this.dialogRef.close(result);
  }
}
