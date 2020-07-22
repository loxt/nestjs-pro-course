import { ProductsService } from './products.service';
import { Controller, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  create() {
    return this.productService.create({
      id: '1',
      name: 'Macbook PRO',
      qty: 1,
      price: 100,
    });
  }
}

// First episode code:
//
// import {
//   Controller,
//   Delete,
//   Get,
//   Header,
//   HttpCode,
//   Param,
//   Post,
//   Put,
//   Query,
//   Redirect,
// } from '@nestjs/common';
//
// @Controller('products')
// export class ProductsController {
//   @Post()
//   @HttpCode(204)
//   @Header('Authorization', 'Bearer BLABLABLA')
//   create(): string {
//     return 'NEW PRODUCT ENDPOINT';
//   }
//
//   @Get('docs')
//   @Redirect('https://docs.nestjs.com', 302)
//   getDocs(@Query('version') version: number) {
//     if (version && version === 5) {
//       return { url: 'https://docs.nestjs.com/v5/' };
//     }
//   }
//
//   @Get()
//   findAll(): string {
//     return 'FIND ALL';
//   }
//
//   @Get('ab*cd')
//   pattern(): string {
//     return 'PATTERN MATCHED';
//   }
//
//   @Get(':id')
//   findOne(@Param() params): string {
//     return params;
//   }
//
//   @Put()
//   update(): string {
//     return 'UPDATE ALL';
//   }
//
//   @Delete()
//   delete(): string {
//     return 'DELETE ALL';
//   }
// }
