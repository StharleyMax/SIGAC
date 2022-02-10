import { ApiProperty } from '@nestjs/swagger';

import { ClientDto } from './client.dto';

export class ClientResponseDto extends ClientDto {
  @ApiProperty({ description: 'id Client', example: '123' })
  id: string;
}
