import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ManyToOne } from 'typeorm/index';
import { UserEntity } from '../users/users.entity';

@Entity({ name: 'photos' })
export class PhotosEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  url: string;
  @ManyToOne((type) => UserEntity, (userEntity) => userEntity.photos)
  user: UserEntity;
}
