import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { Repository } from 'typeorm/index';
import { PhotosEntity } from '../photos/photos.entity';
import { User } from './interfaces/users.interface';
import { CreateUsersDTO } from './dto/create-users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    @InjectRepository(PhotosEntity)
    private readonly photosRepository: Repository<PhotosEntity>,
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
}
