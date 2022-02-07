import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.css']
})
export class TableComponent implements OnInit{
  titles: String[] = [
    '#',
    'Coin',
    'Price', 
    'Price Change',
    '24h Volume'
  ]

  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.http.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }
}