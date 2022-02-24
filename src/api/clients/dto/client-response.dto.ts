import { ApiProperty, PartialType } from '@nestjs/swagger';

import { ClientDto } from './client.dto';

export class ClientResponseDto extends PartialType(ClientDto) {
  @ApiProperty({ description: 'id Client', example: 'UUID' })
  id?: string;
}
