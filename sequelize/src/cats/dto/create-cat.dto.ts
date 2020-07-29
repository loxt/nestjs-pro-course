import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly age: number;
  @IsString()
  @IsNotEmpty()
  readonly breed: string;
}
