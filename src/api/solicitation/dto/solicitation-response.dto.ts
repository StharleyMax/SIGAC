import { PartialType } from '@nestjs/swagger';

import { SolicitationDto } from './solicitation.dto';

export class SolicitationResponseDto extends PartialType(SolicitationDto) {}
