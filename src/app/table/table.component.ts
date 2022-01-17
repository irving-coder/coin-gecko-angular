import { Component } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html'
})
export class TableComponent{
  // title = 'table-component';

  titles: String[] = [
    '#',
    'Coin',
    'Price', 
    'Price Change',
    '24h Volume'
  ]
}