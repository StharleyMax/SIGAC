import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  registration: string;
  password: string;
  tellphone?: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
