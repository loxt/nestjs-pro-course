import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  // your db logic
  create(product: Product) {
    this.products.push(product);
    return this.products;
  }
}
