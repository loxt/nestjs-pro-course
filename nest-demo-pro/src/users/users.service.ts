import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm/index';
import { User } from './interfaces/users.interface';
import { CreateUsersDTO } from './dto/create-users.dto';
import { UpdateUserDTO } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>, // @InjectRepository(PhotosEntity) // private readonly photosRepository: Repository<PhotosEntity>,
  ) {}

  async create(user: CreateUsersDTO): Promise<User> {
    // if i will save the record in user it will automatically save the record in photos
    return await this.usersRepository.save(user);
    // let savedPhotos = [];
    //
    // if (Array.isArray(user.photos) && user.photos.length) {
    //   savedPhotos = await this.photosRepository.save(user.photos);
    // }
    //
    // const savedUser = new UserEntity();
    // savedUser.email = user.email;
    // savedUser.password = user.password;
    // savedUser.photos = savedPhotos;
    // await this.usersRepository.save(savedUser);
    //
    // return { ...savedUser, photos: savedPhotos };
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({ relations: ['photos'] });
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne(id, { relations: ['photos'] });
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }

  async update(id: number, user: UpdateUserDTO): Promise<UpdateResult> {
    return await this.usersRepository.update(id, user);
  }
}
