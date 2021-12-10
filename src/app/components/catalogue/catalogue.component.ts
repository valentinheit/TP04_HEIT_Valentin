import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  products: Product[] = [];
  filterItem: string = '';
  ngOnInit(): void {}

  constructor() {}

  getProducts(event: Product[]): void {
    this.products = event;
  }

  getFilterItem(event: string): void {
    this.filterItem = event;
  }
}
