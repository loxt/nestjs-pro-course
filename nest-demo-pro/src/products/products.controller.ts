import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
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
  async create(@Body() product: CreateProductDTO): Promise<Product[]> {
    return this.productService.create(product);
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Product> {
    return this.productService.findOne(params.id);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Delete(':id')
  // @UseFilters(HttpExceptionFilter)
  async delete(@Param() params): Promise<Product[]> {
    // throw new HttpException('something went wrong', HttpStatus.BAD_REQUEST);
    // throw new ForbiddenException();
    // throw new NotFoundException();
    return this.productService.delete(params.id);
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
