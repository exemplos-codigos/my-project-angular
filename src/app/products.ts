export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone XL',
    price: 799,
    description: 'Um grande telefone com uma das melhores telas'
  },
  {
    id: 2,
    name: 'iPhone Mini',
    price: 699,
    description: 'Um ótimo telefone com uma das melhores câmeras'
  },
  {
    id: 3,
    name: 'Phone Redmi Note 9S',
    price: 299,
    description:
      'O Redmi Note 9S é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.67 polegadas com uma resolução de 2400x1080 pixels.'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
