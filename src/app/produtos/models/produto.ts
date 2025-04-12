import { Acompanhamento } from "./acompanhamento";

export interface Produto {
  _id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;

  acompanhamentos?: Acompanhamento[];//A "?" afirma que pode ser vazio
}
