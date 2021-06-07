import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /* items propriedade para armazenar a matriz dos produtos atuais no carrinho. */
  items: Product[] = [];

  /* Metodo anexa um produto a uma matriz de items. */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /* Metodo coleta os itens que os usuários adicionam ao carrinho e retorna cada item com sua quantidade associada. */
  getItems() {
    return this.items;
  }

  /* Metodo retorna uma matriz vazia de itens, que esvazia o carrinho. */
  clearCart() {
    this.items = [];
    return this.items;
  }

  /* Metodo que utilize o HttpClient get()método. */
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  constructor(private http: HttpClient) {}
}
