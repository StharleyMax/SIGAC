import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AlarmRepository } from '../../database/repositories/alarm.repository';
import { AlarmsController } from './alarms.controller';
import { AlarmsService } from './alarms.service';

@Module({
  imports: [TypeOrmModule.forFeature([AlarmRepository])],
  controllers: [AlarmsController],
  providers: [AlarmsService],
})
export class AlarmsModule {}
