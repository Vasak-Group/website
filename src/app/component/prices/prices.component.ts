import { Component, OnInit } from '@angular/core';
import * as pricesData from '../../../assets/data/prices.json';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  planesList = pricesData.planes;
  marketingList = pricesData.marketing;

  constructor() { }

  ngOnInit(): void {
  }

}
