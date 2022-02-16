import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Alarm } from 'src/database/entities/alarm.entity';

import { AlarmsController } from './alarms.controller';
import { AlarmsService } from './alarms.service';

@Module({
  imports: [TypeOrmModule.forFeature([Alarm])],
  controllers: [AlarmsController],
  providers: [AlarmsService],
})
export class AlarmsModule {}
