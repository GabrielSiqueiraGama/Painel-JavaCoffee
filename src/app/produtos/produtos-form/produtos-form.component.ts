import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import {FormBuilder, FormGroup } from '@angular/forms';
import { ProdutosService } from '../services/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})
export default class ProdutosFormComponent {

  form: FormGroup;

constructor(private formBuilder: FormBuilder, private service: ProdutosService, private _snackBar: MatSnackBar) {
  this.form = this.formBuilder.group({
    nome: [null],
    descricao: [null],
    preco: [null],
    imagem: [null],
    categoria: [null]
  });
}
onSubmit(){
  console.log(this.form.value)
  this.service.save(this.form.value).subscribe(data => console.log(data), error=>this.onError());
}
onCancel(){
  console.log('tchau rs')
}

private onError(){
  this._snackBar.open("Erro ao salvar um novo produto, contate um programador.", '', {duration: 3000});
}
}
