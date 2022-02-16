import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Client } from './clients.entity';

@Entity('alarms')
export class Alarm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Client, (client) => client.alarm)
  @JoinColumn({ name: 'id_client' })
  client: Client;

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
