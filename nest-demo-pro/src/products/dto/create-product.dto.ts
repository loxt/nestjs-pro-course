import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsInt,
} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsInt()
  readonly qty: number;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly partNumber: string;

  @IsOptional()
  @IsString()
  dimension: string;

  @IsOptional()
  @IsInt()
  weight: number;

  @IsOptional()
  @IsString()
  manufacturer: string;

  @IsOptional()
  @IsString()
  origin: string;
  '';
}
