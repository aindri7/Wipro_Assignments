import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  product: Product = {
    id: Date.now(),
    name: '',
    description: '',
    price: 0,
    manufacturer: '',
    category: '',
    stock: 0,
  };

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.addProduct(this.product);
  }
}
