import { EntityRepository, Repository } from 'typeorm';

import { Alarm } from '../entities/alarm.entity';

@EntityRepository(Alarm)
export class AlarmRepository extends Repository<Alarm> {}
