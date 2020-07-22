import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(ProductsController);
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'products', method: RequestMethod.GET });
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'products', method: RequestMethod.GET })
      .forRoutes(ProductsController);
  }
}
