import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Alarm } from './alarm.entity';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Alarm, (alarm) => alarm.client)
  alarm: Alarm;

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
