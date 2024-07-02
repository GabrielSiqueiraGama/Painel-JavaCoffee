import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})
export default class ProdutosFormComponent {

  form: FormGroup;

constructor(private formBuilder: FormBuilder) {
  this.form = this.formBuilder.group({
    nome: [null],
    descricao: [null],
    preco: [null],
    imagem: [null],
    categoria: [null]
  });
}

onSubmit(){

}
onCancel(){}
}
