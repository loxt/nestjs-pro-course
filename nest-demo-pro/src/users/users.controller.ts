import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/create-users.dto';
import { DeleteResult, UpdateResult } from 'typeorm/index';
import { UpdateUserDTO } from './dto/update-users.dto';

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

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.usersService.findOne(+id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return await this.usersService.delete(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() user: UpdateUserDTO,
  ): Promise<UpdateResult> {
    return await this.usersService.update(+id, user);
  }
}
