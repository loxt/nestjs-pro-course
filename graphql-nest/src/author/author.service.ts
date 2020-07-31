import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './author.interface';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { UpdateAuthorInput } from '../graphql';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<Author>,
  ) {}

  async create(author: CreateAuthorDTO): Promise<Author> {
    return await this.authorModel.create(author);
  }

  async find(): Promise<Author[]> {
    return this.authorModel.find();
  }

  async findOne(id: string): Promise<Author> {
    return this.authorModel.findById(id);
  }

  async delete(id: string): Promise<string> {
    const results = await this.authorModel.findByIdAndDelete(id);
    console.log(results);
    return `Author is deleted with id ${id}`;
  }

  async update(id: string, author: UpdateAuthorInput): Promise<Author> {
    return this.authorModel.findByIdAndUpdate(id, author, {
      new: true,
    });
  }
}
