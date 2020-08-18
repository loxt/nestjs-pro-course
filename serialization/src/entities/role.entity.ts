export class RoleEntity {
  id: number;
  name: string;
  email: string;

  constructor(partial: RoleEntity) {
    // Object.assign(this, partial);
  }
}
