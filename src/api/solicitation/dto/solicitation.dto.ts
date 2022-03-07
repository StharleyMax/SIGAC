import { ApiProperty } from '@nestjs/swagger';

import { AnswerResponseDto } from 'src/api/answer/dto/answer-response.dto';
import { ClientResponseDto } from 'src/api/clients/dto/client-response.dto';
import { UserResponseDto } from 'src/api/users/dto/userResponse.dto';

import { SolicitationStatus } from '../enum/solicitation-status.enum';

export class SolicitationDto {
  @ApiProperty({ description: 'id solicitation', example: 'UUID' })
  id?: string;

  @ApiProperty({
    description: 'solicitation for client',
    example: 'GPON: 4-AAAAAA',
  })
  client?: ClientResponseDto;

  @ApiProperty({
    description: 'User created solicitation',
    example: 'ID: UUID, name: Stharley',
  })
  user?: UserResponseDto;

  @ApiProperty({
    description: 'Answers for solicitation',
    example: 'ID: UUID, Description: Preventivo aberto',
  })
  answer?: AnswerResponseDto[];

  @ApiProperty({
    description: 'Complaint the client',
    example: 'internet not function',
  })
  complaint: string;

  @ApiProperty({
    description: 'description the error of client',
    example: 'drop defected',
  })
  description: string;

  @ApiProperty({
    description: 'status solicitation',
    example: 'INIT | PENDING | FINISH',
  })
  status: SolicitationStatus;

  @ApiProperty({
    description: 'open solicitation',
    example: '16-02-2022 15:55',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'update solicitation',
    example: '15-02-2022 15:55',
  })
  updatedAt: Date;
}
