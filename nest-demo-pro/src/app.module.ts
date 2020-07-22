import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest-db',
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      synchronize: true,
    }),
    ProductsModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    console.log(`connection status ${connection.isConnected}`);
  }
  // configure(consumer: MiddlewareConsumer) {
  // consumer.apply(LoggerMiddleware).forRoutes(ProductsController);
  // consumer
  //   .apply(LoggerMiddleware)
  //   .forRoutes({ path: 'products', method: RequestMethod.GET });
  // consumer
  //   .apply(LoggerMiddleware)
  //   .exclude({ path: 'products', method: RequestMethod.GET })
  //   .forRoutes(ProductsController);
  // }
}
