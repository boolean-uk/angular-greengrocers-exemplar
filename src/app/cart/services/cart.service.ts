import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #cartItems: CartItem[] = [];

  cartItems$: Observable<CartItem[]> = of(this.#cartItems);

  addToCart(item: CartItem) {
    const existingItem = this.#cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      this.increaseQuantity(existingItem);
      return;
    }
    this.#cartItems.push(item);
  }

  increaseQuantity(item: CartItem) {
    item.quantity += 1;
  }

  decreaseQuantity(item: CartItem) {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      this.#cartItems.splice(0, 1);
    }
  }
}
