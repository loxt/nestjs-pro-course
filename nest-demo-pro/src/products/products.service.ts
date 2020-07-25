import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  async create(product: CreateProductDTO): Promise<Product> {
    return await this.productRepository.save(product);
  }
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }
  // findOne(id: string): Product {
  //   return this.products.find(p => p.id === id);
  // }
  // delete(id: string): Product[] {
  //   const index = this.products.findIndex(p => p.id === id);
  //   this.products.splice(index, 1);
  //   return this.products;
  // }
}
