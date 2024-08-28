import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { ProdutosService } from '../services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})
export default class ProdutosFormComponent {

  form = this.formBuilder.group({
    _id :[0],
    nome: [''],
    descricao: [''],
    preco: [0],
    imagem: [''],
    categoria: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ProdutosService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ) {}

  onSubmit(){
    console.log(this.form.value)
    this.service.save(this.form.value)
      .subscribe(data => this.onSucess(), error=>this.onError());
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
  ngOnInit(): void{
    const produto: Produto = this.route.snapshot.data['produto'];
    this.form.setValue({
      _id: produto._id,
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
      imagem: produto.imagem,
      categoria: produto.categoria
    });
  }
}
