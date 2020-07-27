import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CategoryDTO } from './create-category.dto';

export class CreateQuestionDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsArray()
  categories: CategoryDTO[];
}
