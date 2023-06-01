import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { StoreComponent } from './containers/store/store.component';

@NgModule({
  declarations: [ItemComponent, ItemListComponent, StoreComponent],
  imports: [CommonModule],
  exports: [StoreComponent],
})
export class StoreModule {}
