import { ApiProperty } from '@nestjs/swagger';

import { SolicitationStatus } from '../enum/solicitation-status.enum';

export class SolicitationDto {
  @ApiProperty({ description: 'id solicitation', example: 'UUID' })
  id?: string;

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
