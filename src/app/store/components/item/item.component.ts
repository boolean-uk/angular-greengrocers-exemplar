import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input('item') item: Item | null = null;
  @Output('add-to-cart') addToCart = new EventEmitter<Item>();

  get itemImage(): string | null {
    if (!this.item) {
      return null;
    }
    return `assets/icons/${this.item.id}.svg`;
  }
}
