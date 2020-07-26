import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosEntity } from './photos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotosEntity])],
  controllers: [PhotosController],
})
export class PhotosModule {}
