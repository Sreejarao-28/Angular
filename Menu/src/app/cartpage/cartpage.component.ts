import { Component, OnInit } from '@angular/core';
import { Cart } from '../services/food/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
      this.setCart();

   }

  ngOnInit(): void {
  }
  setCart() {
    this.cart=this.cartService.getCart();
  }

removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();
}

changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id, quantity);
  this.setCart();
}
}
