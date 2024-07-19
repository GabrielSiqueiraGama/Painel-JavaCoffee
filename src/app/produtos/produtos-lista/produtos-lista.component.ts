import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';

@Component({
  selector: 'app-produtos-lista',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './produtos-lista.component.html',
  styleUrl: './produtos-lista.component.scss'
})
export class ProdutosListaComponent {

}
