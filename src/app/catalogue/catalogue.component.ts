import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  products: Product[] = [];
  search: string = '';
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getCatalogue()
      .subscribe((products) => (this.products = products));
  }

  filter() {
    if (this.search !== '') {
      this.productService
        .getCatalogue()
        .subscribe(
          (products) =>
            (this.products = products.filter(
              (p) => p.libelle.toLowerCase() == this.search.toLowerCase()
            ))
        );
    } else {
      this.productService
        .getCatalogue()
        .subscribe((products) => (this.products = products));
    }
  }
}
