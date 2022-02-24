import { PartialType } from '@nestjs/swagger';

import { AnswerResponseDto } from '../../answer/dto/answer-response.dto';
import { ClientResponseDto } from '../../clients/dto/client-response.dto';
import { AlarmDto } from './alarm.dto';

export class AlarmResponseDto extends PartialType(AlarmDto) {
  client: ClientResponseDto;
  answer?: AnswerResponseDto[];
}
