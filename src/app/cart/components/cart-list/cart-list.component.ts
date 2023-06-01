import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  @Input('items') items: CartItem[] | null = [];
  @Output('increaseQuantity') increaseQuantitiy = new EventEmitter<CartItem>();
  @Output('decreaseQuantity') decreaseQuantitiy = new EventEmitter<CartItem>();
}
