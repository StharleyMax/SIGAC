import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';

import { AlarmsService } from './alarms.service';
import { AlarmDto } from './dto/alarm.dto';

@Controller('alarms')
@UseGuards(AuthGuard('jwt'))
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
    return this.alarmsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: `This action update #ID alarms` })
  update(@Param('id') id: string, @Body() updateAlarmDto: AlarmDto) {
    return this.alarmsService.update(id, updateAlarmDto);
  }
}
