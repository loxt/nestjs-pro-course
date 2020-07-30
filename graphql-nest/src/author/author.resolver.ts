import { Args, Context, Info, Parent, Query, Resolver } from '@nestjs/graphql';
import { Author } from '../graphql';

@Resolver('Author')
export class AuthorResolver {
  authors: Author[] = [{ id: '1', firstName: 'Loxt', lastName: 'Picasso' }];

  @Query()
  async allAuthors(): Promise<Author[]> {
    return Promise.resolve(this.authors);
  }

  @Query()
  async author(
    @Parent() parent,
    @Args('id') id,
    @Context() ctx,
    @Info() info,
  ): Promise<Author> {
    const _author = this.authors.find(author => author.id === id);
    return _author
      ? Promise.resolve(_author)
      : Promise.reject('Could not find any author');
  }
}
