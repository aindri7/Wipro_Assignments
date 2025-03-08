import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [],
  imports: [
    ProductListComponent,  // Import standalone components
    ProductDetailComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class InventoryModule {}
