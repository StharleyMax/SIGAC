import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ClientsService } from './clients.service';
import { ClientRequestDto } from './dto/clientRequest.dto';
import { ClientResponseDto } from './dto/clientResponse.dto';

@Controller('clients')
@ApiTags('Client')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  @ApiOperation({ summary: 'Find all Client' })
  @ApiResponse({
    status: 200,
    description: 'list all Client',
    type: [ClientResponseDto],
  })
  async findAll(): Promise<ClientResponseDto[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find Client by id' })
  @ApiResponse({
    status: 200,
    description: 'list Client',
    type: [ClientResponseDto],
  })
  @ApiResponse({ status: 404, description: 'Client not found' })
  async findById(@Param('id') id: string): Promise<ClientResponseDto> {
    return this.clientsService.findById(id);
  }

  @Post()
  async create(
    @Body() createClientDto: ClientRequestDto,
  ): Promise<ClientResponseDto> {
    return this.clientsService.create(createClientDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClientDto: ClientRequestDto,
  ): Promise<ClientResponseDto> {
    return this.clientsService.update(id, updateClientDto);
  }
}
