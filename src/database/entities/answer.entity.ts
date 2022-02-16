import {
  Entity,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Alarm } from './alarm.entity';
import { Solicitation } from './solicitation.entity';

@Entity('answers')
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Alarm, (alarm) => alarm.answer)
  @JoinColumn({ name: 'id_alarm' })
  alarm?: Alarm;

  @ManyToOne(() => Solicitation, (solicitation) => solicitation.answer)
  @JoinColumn({ name: 'id_solicitation' })
  solicitation?: Solicitation;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
