import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ClientsService } from './clients.service';
import { ClientResponseDto } from './dto/client-response.dto';
import { ClientDto } from './dto/client.dto';

@Controller('clients')
@ApiTags('Client')
@UseGuards(AuthGuard('jwt'))
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  @ApiOperation({ summary: 'Find all Client' })
  @ApiResponse({
    status: 200,
    description: 'list all Client',
    type: [ClientResponseDto],
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  async findAll(): Promise<ClientResponseDto[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find Client by id' })
  @ApiResponse({
    status: 200,
    description: 'list Client',
    type: ClientResponseDto,
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  @ApiResponse({ status: 404, description: 'Client not found' })
  async findById(@Param('id') id: string): Promise<ClientResponseDto> {
    return this.clientsService.findById(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Create Client',
    type: ClientResponseDto,
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  async create(@Body() createClientDto: ClientDto): Promise<ClientResponseDto> {
    return this.clientsService.create(createClientDto);
  }

  @Put(':id')
  @ApiResponse({
    status: 201,
    description: 'Update',
    type: ClientResponseDto,
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  @ApiResponse({ status: 404, description: 'Client not found' })
  async update(
    @Param('id') id: string,
    @Body() updateClientDto: ClientDto,
  ): Promise<ClientResponseDto> {
    return this.clientsService.update(id, updateClientDto);
  }
}
