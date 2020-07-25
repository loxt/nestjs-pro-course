import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { JoinColumn, OneToOne } from 'typeorm/index';
import { ProductDetailsEntity } from './product-details.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  name: string;
  @Column('int')
  qty: number;
  @Column()
  price: number;

  @OneToOne((type) => ProductDetailsEntity)
  @JoinColumn()
  productDetails: ProductDetailsEntity;
}
