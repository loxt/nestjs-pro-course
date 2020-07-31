import { Args, Mutation, Query, Resolver, Root } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './author.interface';
import { CreateAuthorDTO } from './dto/create-author.dto';

@Resolver('Author')
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}

  @Query()
  async allAuthors(): Promise<Author[]> {
    return await this.authorService.find();
  }

  @Mutation()
  async createAuthor(
    @Root() root: ParameterDecorator,
    @Args('author') author: CreateAuthorDTO,
  ): Promise<Author> {
    return await this.authorService.create(author);
  }

  // @Query()
  // async author(
  //   @Parent() parent,
  //   @Args('id') id,
  //   @Context() ctx,
  //   @Info() info,
  // ): Promise<Author> {
  //   const _author = this.authors.find(author => author.id === id);
  //   return _author
  //     ? Promise.resolve(_author)
  //     : Promise.reject('Could not find any author');
  // }
}
