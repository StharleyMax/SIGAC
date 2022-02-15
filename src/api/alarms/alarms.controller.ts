import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { AlarmsService } from './alarms.service';
import { AlarmPartialDto } from './dto/alarm-partial.dto';
import { AlarmDto } from './dto/alarm.dto';

@Controller('alarms')
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @Post()
  @ApiOperation({ summary: 'This action adds a new alarm' })
  create(@Body() createAlarmDto: AlarmDto) {
    return this.alarmsService.create(createAlarmDto);
  }

  @Get()
  @ApiOperation({ summary: `This action returns all alarms` })
  findAll() {
    return this.alarmsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: `This action returns a #ID alarm` })
  findOne(@Param('id') id: string) {
    return this.alarmsService.findOneOrFail({ id });
  }

  @Patch(':id')
  @ApiOperation({ summary: `This action update #ID alarms` })
  update(@Param('id') id: string, @Body() updateAlarmDto: AlarmPartialDto) {
    return this.alarmsService.update(id, updateAlarmDto);
  }
}
