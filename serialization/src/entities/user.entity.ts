import { Exclude, Expose, Transform } from 'class-transformer';
import { RoleEntity } from './role.entity';

export class UserEntity {
  id: number;
  firstName: string;
  lastName: string;

  password: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  role: RoleEntity;

  constructor(partial: UserEntity) {
    // Object.assign(this, partial);
  }
}
