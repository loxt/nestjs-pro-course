import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() user: CreateUsersDTO): Promise<User> {
    return await this.usersService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
