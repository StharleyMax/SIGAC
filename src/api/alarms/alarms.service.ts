import { Injectable, NotFoundException } from '@nestjs/common';

import { AlarmRepository } from '../../database/repositories/alarm.repository';
import { AlarmResponseDto } from './dto/alarm-response.dto';
import { AlarmDto } from './dto/alarm.dto';
import { AlarmAllMap, AlarmMap } from './map/alarm.map';

@Injectable()
export class AlarmsService {
  constructor(private readonly alarmRepository: AlarmRepository) {}

  async create(createAlarmDto: AlarmDto): Promise<AlarmResponseDto> {
    const alarm = await this.alarmRepository.save(createAlarmDto);
    return AlarmMap.toDto(alarm);
  }

  async findAll() {
    const alarm = await this.alarmRepository.find({
      relations: ['answer', 'client'],
    });

    return AlarmAllMap.allToDto(alarm);
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
