import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [];
  products$ = new BehaviorSubject<Product[]>(this.products);

  addProduct(product: Product) {
    this.products.push(product);
    this.products$.next(this.products);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((p) => p.id !== id);
    this.products$.next(this.products);
  }
}
