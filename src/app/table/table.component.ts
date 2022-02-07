import { Component } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.css']
})
export class TableComponent{
  titles: String[] = [
    '#',
    'Coin',
    'Price', 
    'Price Change',
    '24h Volume'
  ]
  
}