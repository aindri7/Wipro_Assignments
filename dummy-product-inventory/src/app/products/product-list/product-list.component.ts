import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }
}
