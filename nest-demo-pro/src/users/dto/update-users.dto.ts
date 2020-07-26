import { IsArray, IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdatePhotoDTO {
  @IsOptional()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  readonly url: string;
}

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsArray()
  photos: UpdatePhotoDTO[];
}
