import { PartialType } from '@nestjs/swagger';

import { AlarmDto } from './alarm.dto';

export class AlarmPartialDto extends PartialType(AlarmDto) {}
