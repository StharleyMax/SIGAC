import { ApiProperty } from '@nestjs/swagger';

import { IUserDto } from '../interfaces/IUser.interface';

export class UserDto implements IUserDto {
  @ApiProperty({ description: 'registration', example: 'tr00000' })
  registration: string;

  @ApiProperty({ description: 'password', example: 'password' })
  password: string;

  @ApiProperty({ description: 'tellphone', example: '061999999999' })
  tellphone?: string;
}
