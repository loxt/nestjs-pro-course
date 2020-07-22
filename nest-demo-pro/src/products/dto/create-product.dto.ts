import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsInt()
  readonly qty: number;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}
