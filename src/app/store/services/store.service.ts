import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  #items: Item[] = [
    {
      id: '001-beetroot',
      name: 'beetroot',
      price: 0.35,
    },
    {
      id: '002-carrot',
      name: 'carrot',
      price: 0.35,
    },
    {
      id: '003-apple',
      name: 'apple',
      price: 0.35,
    },
    {
      id: '004-apricot',
      name: 'apricot',
      price: 0.35,
    },
    {
      id: '005-avocado',
      name: 'avocado',
      price: 0.35,
    },
    {
      id: '006-bananas',
      name: 'bananas',
      price: 0.35,
    },
    {
      id: '007-bell-pepper',
      name: 'bell pepper',
      price: 0.35,
    },
    {
      id: '008-berry',
      name: 'berry',
      price: 0.35,
    },
    {
      id: '009-blueberry',
      name: 'blueberry',
      price: 0.35,
    },
    {
      id: '010-eggplant',
      name: 'eggplant',
      price: 0.35,
    },
  ];

  items$: Observable<Item[]> = of(this.#items);

  constructor(private readonly cartService: CartService) {}

  addToCart(item: Item) {
    this.cartService.addToCart({ ...item, quantity: 1 });
  }
}
