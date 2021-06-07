import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  /* ActivatedRoute é específico para cada componente que o Roteador Angular carrega. */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  /* 
      Metodo que adiciona o produto atual ao carrinho.
      Toma a corrente product como argumento.
      Usa o CartService addToCart() metodo para adicionar o produto ao carrinho.
      Exibe uma mensagem de que você adicionou um produto ao carrinho.
   */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }

  ngOnInit() {
    /* First get the product id from the current route. */
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    /* Find the product that correspond with the id provided in route. */
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
