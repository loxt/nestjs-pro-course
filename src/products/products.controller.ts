import {
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Post,
  Put,
  Query,
  Redirect,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  @HttpCode(204)
  @Header('Authorization', 'Bearer BLABLABLA')
  create(): string {
    return 'NEW PRODUCT ENDPOINT';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
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
