import { ApiProperty, PartialType } from '@nestjs/swagger';

import { ClientResponseDto } from 'src/api/clients/dto/client-response.dto';
import { UserResponseDto } from 'src/api/users/dto/userResponse.dto';

import { SolicitationStatus } from '../enum/solicitation-status.enum';
import { SolicitationDto } from './solicitation.dto';

export class SolicitationResponseDto extends PartialType(SolicitationDto) {
  client?: ClientResponseDto;
  user?: UserResponseDto;
  @ApiProperty({
    description: 'status solicitation',
    example: 'INIT | PENDING | FINISH',
  })
  status: SolicitationStatus;
}
