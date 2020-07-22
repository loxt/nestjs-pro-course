import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products = [];

  // your db logic
  create(product) {
    this.products.push(product);
    return this.products;
  }
}
