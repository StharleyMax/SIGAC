import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { ClientsService } from './clients.service';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.clientsService.findById(id);
  }

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientsService.update(id, updateClientDto);
  }
}
