export interface Consumo {
  id: number;
/*  cnpj: string;
  origem: string;
  periodo: Date;
  litros: number;*/
  postDate: Date;
  url: string;
  description: string;
  allowComments: true;
  likes: number;
  comments: number;
  userId: number;
}

export type Consumos = Array<Consumo>;
