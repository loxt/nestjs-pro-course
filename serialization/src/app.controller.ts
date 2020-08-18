import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { RoleEntity } from './entities/role.entity';
import { UserEntity } from './entities/user.entity';

@Controller()
export class AppController {
  @Get()
  findOne(): UserEntity {
    throw new Error('Not Implemented!');
  }
}
