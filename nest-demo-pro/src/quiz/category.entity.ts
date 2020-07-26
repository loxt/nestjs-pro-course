import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm/index';
import { QuestionEntity } from './question.entity';

@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    (type) => QuestionEntity,
    (questionEntity) => questionEntity.categories,
  )
  questions: QuestionEntity[];
}
