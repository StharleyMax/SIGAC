import { PartialType } from '@nestjs/mapped-types';

export class CreateClientDto {
  user: string;
  gpon: string;
  address: string;
  voip: string;
  tellphone1: string;
  tellphone2: string;
}

export class UpdateClientDto extends PartialType(CreateClientDto) {}
