import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  private findAll(
    @Req() req: Request,
    @Res() res: Response,
    @Query() query,
  ): string {
    res.json({ msg: 'success' });
    console.log(req, query);
    return 'Find All';
  }
}
