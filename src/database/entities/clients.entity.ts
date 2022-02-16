import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Alarm } from './alarm.entity';
import { Solicitation } from './solicitation.entity';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Alarm, (alarm) => alarm.client)
  alarm?: Alarm[];

  @OneToMany(() => Solicitation, (solicitation) => solicitation.client)
  solicitation: Solicitation[];

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
