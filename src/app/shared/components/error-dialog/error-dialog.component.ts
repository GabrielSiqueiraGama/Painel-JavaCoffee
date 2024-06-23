import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppMaterialModule } from '../../app-material/app-material.module';

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})

export class ErrorDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}


}
