import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  create(): string {
    return 'NEW PRODUCT ENDPOINT';
  }

  @Get()
  findAll(): string {
    return 'FIND ALL';
  }

  @Get('ab*cd')
  pattern(): string {
    return 'PATTERN MATCHED';
  }

  @Get(':id')
  findOne(): string {
    return 'FIND ONE ENDPOINT';
  }

  @Put()
  update(): string {
    return 'UPDATE ALL';
  }

  @Delete()
  delete(): string {
    return 'DELETE ALL';
  }
}
