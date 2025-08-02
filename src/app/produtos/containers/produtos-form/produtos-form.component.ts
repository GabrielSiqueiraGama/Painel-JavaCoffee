import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, UntypedFormArray, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { ProdutosService } from '../../services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../models/produto';
import { Ingrediente } from '../../models/Ingrediente';
import { FormUtilsService } from '../../../shared/form/form-utils.service';

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
    private route: ActivatedRoute,
    public formUtils: FormUtilsService
    ) {}

    private retrieveIngrediente(produto: Produto){
      const ingredientes = [];
       if(produto?.ingredientes){
        produto.ingredientes.forEach(ingrediente => ingredientes.push(this.createIngrediente(ingrediente)))
       }else{
        ingredientes.push(this.createIngrediente());
       }
      return ingredientes;
    }
  private createIngrediente(ingrediente: Ingrediente ={id: '', nome: ''}){
    return this.formBuilder.group({
      id: [ingrediente.id],
      nome: [ingrediente.nome, [Validators.required]],
    })
  }
  onSubmit(){
    if(this.form.valid){
      console.log(this.form.value)
    this.service.save(this.form.value)
      .subscribe(data => this.onSucess(), error=>this.onError());
    this.location.back();
    }
    else{
      this.formUtils.validateAllFormFields(this.form);
    }

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

  getIngredientesFromArray(){
    return (<UntypedFormArray>this.form.get('ingredientes')).controls;
  }
  addNewIngrediente(){
    const ingredientes = this.form.get('ingredientes') as UntypedFormArray;
    ingredientes.push(this.createIngrediente())
  }
  removeIngrediente(index: number){
    const ingredientes = this.form.get('ingredientes') as UntypedFormArray;
    ingredientes.removeAt(index)
  }

  ngOnInit(): void{
    const produto: Produto = this.route.snapshot.data['produto'];
    console.log(produto);
    //this.form.setValue({_id: produto._id,nome: produto.nome,descricao: produto.descricao,preco: produto.preco,imagem: produto.imagem,categoria: produto.categoria});
    this.form = this.formBuilder.group({
      _id :[produto._id],
      nome: [produto.nome, [Validators.required,
        Validators.minLength(5), Validators.maxLength(100)]],
      descricao: [produto.descricao, [Validators.required]],
      preco: [produto.preco, [Validators.required]],
      imagem: [produto.imagem, [Validators.required]],
      categoria: [produto.categoria, [Validators.required]],
      ingredientes: this.formBuilder.array(this.retrieveIngrediente(produto))
    });
  }
}
