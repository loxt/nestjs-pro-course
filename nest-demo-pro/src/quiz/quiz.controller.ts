import { Body, Controller, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Category } from './interfaces/category.interface';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Post('categories')
  async createCategories(
    @Body() categories: CreateCategoryDTO,
  ): Promise<Category[]> {
    return await this.quizService.createCategories(categories);
  }
}
