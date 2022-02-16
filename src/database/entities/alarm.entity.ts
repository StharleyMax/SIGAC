import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Answer } from './answer.entity';
import { Client } from './clients.entity';

@Entity('alarms')
export class Alarm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Client, (client) => client.alarm)
  @JoinColumn({ name: 'id_client' })
  client: Client;

  @OneToMany(() => Answer, (answer) => answer.alarm)
  answer: Answer[];

  @Column()
  type: string;

  @Column()
  galc: string;

  @Column()
  slot: number;

  @Column()
  port: number;

  @Column()
  onu: number;
}
