import { Injectable, NotFoundException } from '@nestjs/common';

import { AlarmRepository } from '../../database/repositories/alarm.repository';
import { AlarmResponseDto } from './dto/alarm-response.dto';
import { AlarmDto } from './dto/alarm.dto';
import { AlarmMap } from './map/alarm.map';

@Injectable()
export class AlarmsService {
  constructor(private readonly alarmRepository: AlarmRepository) {}

  async create(createAlarmDto: AlarmDto) {
    return this.alarmRepository.save(createAlarmDto);
  }

  async findAll() {
    return this.alarmRepository.find();
  }

  async findOne(id: string): Promise<AlarmResponseDto> {
    const alarm = await this.alarmRepository.findOne(id, {
      relations: ['answer', 'client'],
    });
    return AlarmMap.toDto(alarm);
  }

  async update(id: string, updateAlarmDto: AlarmDto) {
    const existAlarm = await this.alarmRepository.findOne({ id });

    if (!existAlarm) throw new NotFoundException('Alarm not found');

    const updateAlarm = await this.alarmRepository.preload({
      id,
      ...updateAlarmDto,
    });
    await this.alarmRepository.save(updateAlarm);
    return AlarmMap.toDto(updateAlarm);
  }
}
