import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})
export default class ProdutosFormComponent {

  form: FormBuilder;

constructor(private formBuilder: FormBuilder) {
  this.form = this.formBuilder.group({
    nome: [null],
    descricao: [null],
    preco: [null],
    imagem: [null],
  });
}
}
