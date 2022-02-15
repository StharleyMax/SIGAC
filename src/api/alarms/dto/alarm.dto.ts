//import { ClientDto } from 'src/api/clients/dto/client.dto';

import { ApiProperty } from '@nestjs/swagger';

export class AlarmDto {
  @ApiProperty({ description: 'id alarm', example: 'UUID' })
  id: string;

  @ApiProperty({ description: 'id cliente', example: 'UUID' })
  client: any;

  @ApiProperty({ description: 'type alarm', example: 'major | warn | minor' })
  type: string;

  @ApiProperty({ description: 'GALC', example: ' EAGL01' })
  galc: string;

  @ApiProperty({ description: 'SLOT', example: 1 })
  slot: number;

  @ApiProperty({ description: 'PORT', example: 1 })
  port: number;

  @ApiProperty({ description: 'ONU', example: 10 })
  onu: number;
}
