import { ApiProperty } from '@nestjs/swagger';

import { IsOptional, IsString } from 'class-validator';

export class ClientDto {
  @IsString()
  @ApiProperty({ description: 'client identified field', example: '4-ABC123' })
  gpon: string;

  @IsString()
  @ApiProperty({ description: 'address', example: 'QD 80 LT 123' })
  address: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'number voip client', example: '6112341111' })
  voip: string;

  @IsString()
  @ApiProperty({ description: 'Tellphone contact', example: '6112341234' })
  tellphone1: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'client identified field', example: '4-ABC123' })
  tellphone2: string;
}
