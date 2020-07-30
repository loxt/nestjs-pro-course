import { Resolver, Query, Parent, Args, Context, Info } from '@nestjs/graphql';
import { Author } from 'src/graphql';

@Resolver('Author')
export class AuthorResolver {
  authors: Author[] = [{ id: '1', firstName: 'jane', lastName: 'doe' }];
  @Query()
  async allAuthors(): Promise<Author[]> {
    return Promise.resolve(this.authors);
  }
  @Query()
  async author(
    @Parent() parent,
    @Args('id') id,
    @Context() context,
    @Info() info,
  ): Promise<Author> {
    const authorFound = this.authors.find(author => author.id === id);
    return authorFound
      ? Promise.resolve(authorFound)
      : Promise.reject('Could not find any author');
  }
}
