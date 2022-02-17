import { PartialType } from '@nestjs/swagger';

import { AnswerDto } from './answer.dto';

export class AnswerResponseDto extends PartialType(AnswerDto) {}
