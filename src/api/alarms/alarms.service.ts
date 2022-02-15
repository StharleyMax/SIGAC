import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindConditions, FindOneOptions, Repository } from 'typeorm';

import { Alarm } from '../../database/entities/alarm.entity';
import { AlarmPartialDto } from './dto/alarm-partial.dto';
import { AlarmDto } from './dto/alarm.dto';

@Injectable()
export class AlarmsService {
  constructor(
    @InjectRepository(Alarm)
    private readonly alarmRepository: Repository<Alarm>,
  ) {}

  async create(createAlarmDto: AlarmDto) {
    return this.alarmRepository.save(createAlarmDto);
  }

  async findAll() {
    return this.alarmRepository.find();
  }

  async findOneOrFail(
    conditions: FindConditions<AlarmPartialDto>,
    options?: FindOneOptions<AlarmPartialDto>,
  ) {
    try {
      return this.alarmRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updateAlarmDto: AlarmPartialDto) {
    const existAlarm = await this.alarmRepository.findOne({ id });

    if (!existAlarm) throw new NotFoundException('Alarm not found');

    const updateAlarm = await this.alarmRepository.preload({
      id,
      ...updateAlarmDto,
    });

    return this.alarmRepository.save(updateAlarm);
  }
}
