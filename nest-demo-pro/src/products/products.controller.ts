import {
  Controller,
  Post,
  Body,
  UseFilters,
  UseInterceptors,
  Get,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product> {
    return await this.productService.create(product);
  }

  @Get()
  async find(): Promise<Product[]> {
    return this.productService.findAll();
  }
  // @Get(':id')
  // async findOne(@Param() params): Promise<Product> {
  //   return this.productService.findOne(params.id);
  // }
  // @Delete(':id')
  // async delete(@Param() params): Promise<Product[]> {
  //   // return this.productService.delete(params.id);
  //   // throw new HttpException('something went wrong', HttpStatus.BAD_REQUEST);
  //   throw new NotFoundException();
  // }
}
