import { Args, Context, Info, Parent, Query, Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './author.interface';

@Resolver('Author')
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}

  @Query()
  async allAuthors(): Promise<Author[]> {
    return await this.authorService.find();
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
