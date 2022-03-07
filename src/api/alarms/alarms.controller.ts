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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AlarmsService } from './alarms.service';
import { AlarmResponseDto } from './dto/alarm-response.dto';
import { AlarmDto } from './dto/alarm.dto';

@Controller('alarms')
@ApiTags('Alarms')
@UseGuards(AuthGuard('jwt'))
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @Post()
  @ApiOperation({ summary: 'This action adds a new alarm' })
  @ApiResponse({
    status: 201,
    description: 'created alarm',
    type: AlarmResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Parameter invalid' })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  create(@Body() createAlarmDto: AlarmDto): Promise<AlarmResponseDto> {
    return this.alarmsService.create(createAlarmDto);
  }

  @Get()
  @ApiOperation({ summary: `This action returns all alarms` })
  @ApiResponse({
    status: 200,
    description: 'list Alarms',
    type: [AlarmResponseDto],
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  findAll() {
    return this.alarmsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: `This action returns a #ID alarm` })
  @ApiResponse({
    status: 200,
    description: 'Show Alarm',
    type: AlarmResponseDto,
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  @ApiResponse({ status: 404, description: 'alarm not found' })
  findOne(@Param('id') id: string): Promise<AlarmResponseDto> {
    return this.alarmsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: `This action update #ID alarms` })
  @ApiResponse({
    status: 200,
    description: 'update Alarm',
    type: AlarmResponseDto,
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  @ApiResponse({ status: 404, description: 'alarm not found' })
  update(
    @Param('id') id: string,
    @Body() updateAlarmDto: AlarmDto,
  ): Promise<AlarmResponseDto> {
    return this.alarmsService.update(id, updateAlarmDto);
  }
}
