import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  /* Propriedade para armazenar os produtos no carrinho. */
  items = this.cartService.getItems();

  /* 
    Metodo para definir a checkoutForm propriedade como um modelo de formulário contendo os campos name e address.
 */
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  /* 
      Metodo para processar o formulário.
      Este metodo permite que os usuários enviem seus nomes e endereços.
   */
  onSubmit(): void {
    /* Process checkout data here */
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {}
}