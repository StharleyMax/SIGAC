import { ApiProperty } from '@nestjs/swagger';

import { IClientDto } from '../interfaces/client.interface';

export class ClientDto implements IClientDto {
  @ApiProperty({ description: 'client identified field', example: '4-ABC123' })
  gpon: string;

  @ApiProperty({ description: 'address', example: 'QD 80 LT 123' })
  address: string;

  @ApiProperty({ description: 'number voip client', example: '6112341111' })
  voip: string;

  @ApiProperty({ description: 'Tellphone contact', example: '6112341234' })
  tellphone1: string;

  @ApiProperty({ description: 'client identified field', example: '4-ABC123' })
  tellphone2: string;
}
