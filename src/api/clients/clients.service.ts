import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Client } from 'src/database/entities/clients.entity';
import { Repository } from 'typeorm';

import { ClientRequestDto } from './dto/clientRequest.dto';
import { ClientResponseDto } from './dto/clientResponse.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<ClientResponseDto[]> {
    return this.clientRepository.find();
  }

  async findById(id: string): Promise<ClientResponseDto> {
    return this.clientRepository.findOne({ id });
  }

  async create(crateClientDto: ClientRequestDto): Promise<ClientResponseDto> {
    console.log({ crateClientDto });

    return this.clientRepository.save(crateClientDto);
  }

  async update(
    id: string,
    updateClientDto: ClientRequestDto,
  ): Promise<ClientResponseDto> {
    const clientExist = await this.clientRepository.findOne({ id });
    if (!clientExist) throw new NotFoundException(`Client ID ${id} not found`);

    const client = await this.clientRepository.preload({
      id,
      ...updateClientDto,
    });

    return this.clientRepository.save(client);
  }
}
