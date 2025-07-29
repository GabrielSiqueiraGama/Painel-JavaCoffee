import { Ingrediente } from "./Ingrediente";


export interface Produto {
  _id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;

  ingredientes?: Ingrediente[];//A "?" afirma que pode ser vazio
}
