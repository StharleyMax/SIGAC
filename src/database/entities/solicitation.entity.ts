import { SolicitationStatus } from 'src/api/solicitation/enum/solicitation-status.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Answer } from './answer.entity';
import { Client } from './clients.entity';
import { User } from './users.entity';

@Entity('solicitations')
export class Solicitation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.solicitation)
  @JoinColumn({ name: 'id_user' })
  user: User;

  @ManyToOne(() => Client, (client) => client.solicitation)
  @JoinColumn({ name: 'id_client' })
  client?: Client;

  @OneToMany(() => Answer, (answer) => answer.solicitation)
  answer: Answer[];

  @Column()
  complaint: string;

  @Column()
  description?: string;

  @Column()
  status: SolicitationStatus;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
