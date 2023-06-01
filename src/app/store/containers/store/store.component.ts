import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(private readonly storeService: StoreService) {}

  items$: Observable<Item[]> = this.storeService.items$;

  addToCart(item: Item) {
    this.storeService.addToCart(item);
  }
}
