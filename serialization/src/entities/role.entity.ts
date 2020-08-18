export class RoleEntity {
  id: number;
  name: string;
  email: string;

  constructor(partial: Partial<RoleEntity>) {
    // Object.assign(this, partial);
  }
}
