import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, UpdateProduct } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductDetailsEntity } from './entities/product-details.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(ProductDetailsEntity)
    private readonly productDetailsRepository: Repository<ProductDetailsEntity>,
  ) {}

  async create(product: CreateProductDTO): Promise<Product> {
    const productDetails = await this.productDetailsRepository.save({
      dimension: product.dimension,
      partNumber: product.partNumber,
      weight: product.weight,
      manufacturer: product.manufacturer,
      origin: product.origin,
    });

    const newProduct = new ProductEntity();
    newProduct.name = product.name;
    newProduct.price = product.price;
    newProduct.qty = product.qty;
    newProduct.productDetails = productDetails;
    await this.productRepository.save(newProduct);
    return { ...newProduct, productDetails };
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({
      relations: ['productDetails'],
    });
  }

  async findOne(id: number): Promise<Product> {
    const results = await this.productRepository.findOne(id, {
      relations: ['productDetails'],
    });
    if (!results) {
      throw new NotFoundException('Could not find product');
    }
    return results;
  }

  async delete(productId: number, productDetailsId: number): Promise<any> {
    await Promise.all([
      await this.productRepository.delete(productId),
      await this.productDetailsRepository.delete(productDetailsId),
    ]);
    return {
      msg: `product is deleted with id ${productId} and product details with id ${productDetailsId}`,
    };
  }

  async update(id: number, recordToUpdate: UpdateProduct): Promise<Product> {
    const product = await this.productRepository.findOne(id, {
      relations: ['productDetails'],
    });
    if (!product) {
      throw new NotFoundException('Could not find any product');
    }
    // merge the product with recordToUpdate
    const { qty, price, name } = recordToUpdate;
    this.productRepository.merge(product, { qty, name, price });
    const updatedProduct = await this.productRepository.save(product);

    const foundDetails = await this.productDetailsRepository.findOne(
      product.productDetails.id,
    );

    const {
      dimension,
      weight,
      origin,
      manufacturer,
      partNumber,
    } = recordToUpdate;
    this.productDetailsRepository.merge(foundDetails, {
      dimension,
      weight,
      origin,
      manufacturer,
      partNumber,
    });
    const updatedDetails = await this.productDetailsRepository.save(
      foundDetails,
    );
    return { ...updatedProduct, productDetails: updatedDetails };
  }
}
