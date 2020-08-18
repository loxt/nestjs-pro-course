import {ClassSerializerInterceptor, Controller, Get, UseInterceptors} from '@nestjs/common';
import { RoleEntity } from './entities/role.entity';
import { UserEntity } from './entities/user.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AppController {
  @Get()
  findOne(): UserEntity {
    // throw new Error('Not Implemented!');
    // return the user with id, firstName, lastName
    // fullName,
    // only return the name from role entity

    return new UserEntity({
      id: 1,
      firstName: 'Emannuel',
      lastName: 'Loxt',
      // fullName: 'Emannuel Loxt',
      role: new RoleEntity({
        id: 1,
        name: 'admin',
        email: 'emannuelloxt@hotmail.com',
      }),
      password: 'loxt123',
    });
  }
}
