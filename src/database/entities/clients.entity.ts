import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './users.entity';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @JoinColumn({ name: 'id_user' })
  @ManyToOne(() => User, (user) => user.client)
  user: User;

  @Column()
  gpon: string;

  @Column()
  address: string;

  @Column()
  voip: string;

  @Column()
  tellphone1: string;

  @Column()
  tellphone2: string;
}
