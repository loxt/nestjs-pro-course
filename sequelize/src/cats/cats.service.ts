import { Inject, Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY') private readonly catsRepository: typeof Cat,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    console.log(createCatDto);
    return await this.catsRepository.create(createCatDto);
  }

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.findAll<Cat>();
  }
}
