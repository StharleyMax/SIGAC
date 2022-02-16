import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Solicitation } from './solicitation.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Solicitation, (solicitation) => solicitation.user)
  solicitation: Solicitation[];

  @Column({ unique: true })
  registration: string;

  @Column()
  password: string;

  @Column()
  tellphone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
