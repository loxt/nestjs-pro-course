import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PhotosEntity } from '../../photos/photos.entity';

export class CreateUsersDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsArray()
  photos: PhotosEntity[];
}
