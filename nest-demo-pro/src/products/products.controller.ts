import {
  Controller,
  Post,
  Body,
  UseFilters,
  UseInterceptors,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { DeleteResult } from 'typeorm/index';
import { UpdateProductDTO } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async find(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product> {
    return await this.productService.create(product);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return await this.productService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() recordToUpdate: UpdateProductDTO,
  ): Promise<Product> {
    return await this.productService.update(+id, recordToUpdate);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return await this.productService.delete(+id);
  }
}
