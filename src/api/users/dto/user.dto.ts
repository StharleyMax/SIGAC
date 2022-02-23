import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ description: 'ID', example: 'UUID' })
  id?: string;

  @ApiProperty({ description: 'registration', example: 'tr00000' })
  registration: string;

  @ApiProperty({ description: 'password', example: 'password' })
  password: string;

  @ApiProperty({ description: 'tellphone', example: '061999999999' })
  tellphone?: string;
}
