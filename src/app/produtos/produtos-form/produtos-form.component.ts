import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})
export default class ProdutosFormComponent {

  form: FormGroup;

constructor(private formBuilder: FormBuilder, private service: ProdutosService, private _snackBar: MatSnackBar, private location: Location) {
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
  this.service.save(this.form.value).subscribe(data => this.onSucess(), error=>this.onError());
  this.location.back();
}
onCancel(){
  this.location.back();
}

private onError(){
  this._snackBar.open("Erro ao salvar um novo produto, contate um programador.", '', {duration: 3000});
}
private onSucess(){
  this._snackBar.open("Produto salvo com sucesso.", '', {duration: 3000});
}
}
