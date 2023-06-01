import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input('item') item: CartItem | null = null;
  @Output('increaseQuantity') increaseQuantitiy = new EventEmitter<CartItem>();
  @Output('decreaseQuantity') decreaseQuantitiy = new EventEmitter<CartItem>();

  get itemImage(): string | null {
    if (!this.item) {
      return null;
    }
    return `assets/icons/${this.item.id}.svg`;
  }
}
