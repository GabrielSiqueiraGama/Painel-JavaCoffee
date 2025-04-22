import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { ProdutosService } from '../../services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../models/produto';
import { Acompanhamento } from '../../models/acompanhamento';

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})
export default class ProdutosFormComponent {

  form!: FormGroup;
  /*form = this.formBuilder.group({
    _id :[0],
    nome: ['', [Validators.required,
      Validators.minLength(5), Validators.maxLength(100)]],
    descricao: ['', [Validators.required]],
    preco: [0, [Validators.required]],
    imagem: ['', [Validators.required]],
    categoria: ['', [Validators.required]]
  });*/

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ProdutosService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ) {}

    private obterAcompanhamento(produto: Produto){
      const acompanhamentos = [];
       if(produto?.acompanhamentos){
        produto.acompanhamentos.forEach(acompanhamento => acompanhamentos.push(this.createAcompanhamento(acompanhamento)))
       }else{
        acompanhamentos.push(this.createAcompanhamento );
       }
      return acompanhamentos;
    }
  private createAcompanhamento(acompanhamento: Acompanhamento ={id: '', nome: '', descricao: ''}){
    return this.formBuilder.group({
      id: [acompanhamento.id],
      nome: [acompanhamento.nome],
      descricao: [acompanhamento.descricao ]
    })
  }
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
  getErrorMessage(fieldname: string){
    const field = this.form.get(fieldname);

    if(field?.hasError('required')){
      return 'Campo obrigatorio.';
    }
    if(field?.hasError('minLength')){
      const requiredLength = field.errors ? field.errors['minlength']['requiredlength']: 5;
      return `Tamanho minimo de caracteres é de: ${requiredLength} do que o permitido.`;
    }
    if(field?.hasError('maxLength')){
      const requiredLength = field.errors ? field.errors['maxlength']['requiredlength']: 100;
      return `Tamanho maximo de caracteres é de: ${requiredLength} do que o permitido.`;
    }
    return 'erro';
  }
  ngOnInit(): void{
    const produto: Produto = this.route.snapshot.data['produto'];
    //this.form.setValue({_id: produto._id,nome: produto.nome,descricao: produto.descricao,preco: produto.preco,imagem: produto.imagem,categoria: produto.categoria});
    this.form = this.formBuilder.group({
      _id :[produto._id],
      nome: [produto.nome, [Validators.required,
        Validators.minLength(5), Validators.maxLength(100)]],
      descricao: [produto.descricao, [Validators.required]],
      preco: [produto.preco, [Validators.required]],
      imagem: [produto.imagem, [Validators.required]],
      categoria: [produto.categoria, [Validators.required]],
      acompanhamentos: this.formBuilder.array(this.obterAcompanhamento(produto))
    });
  }
}
