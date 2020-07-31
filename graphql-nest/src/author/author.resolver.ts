import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './author.interface';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { UpdateAuthorInput } from '../graphql';

@Resolver('Author')
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}

  @Query()
  async allAuthors(): Promise<Author[]> {
    return await this.authorService.find();
  }

  @Mutation()
  async createAuthor(@Args('author') author: CreateAuthorDTO): Promise<Author> {
    return await this.authorService.create(author);
  }

  @Mutation()
  async deleteAuthor(@Args('id') id: string): Promise<string> {
    return await this.authorService.delete(id);
  }

  @Mutation()
  async updateAuthor(
    @Args('id') id: string,
    @Args('author') author: UpdateAuthorInput,
  ): Promise<Author> {
    return await this.authorService.update(id, author);
  }

  @Query()
  async author(@Args('id') id: string): Promise<Author> {
    return await this.authorService.findOne(id);
  }

  @ResolveProperty()
  posts(@Parent() author) {
    const { id } = author;
    // fetch all the posts from mongodb post collection by authorId
    return [{ id: '1', title: 'LEARN NODE' }];
  }

  @ResolveProperty()
  address(@Parent() author) {
    const { id } = author;
    // fetch the author address on the based on author id
    return [{ id: '1', zipCode: '13123', phone: '939123812', city: 'ivi' }];
  }
}
