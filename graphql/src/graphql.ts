
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Author {
    id: string;
    firstName?: string;
    lastName?: string;
}

export interface IQuery {
    allAuthors(): Author[] | Promise<Author[]>;
    author(id: string): Author | Promise<Author>;
}
