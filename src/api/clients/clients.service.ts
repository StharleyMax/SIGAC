import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Client } from 'src/database/entities/clients.entity';
import { Repository } from 'typeorm';

import { ClientResponseDto } from './dto/client-response.dto';
import { ClientDto } from './dto/client.dto';
import { ClientsMap } from './map/clients.map';

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
    return ClientsMap.toDto(await this.clientRepository.findOne({ id }));
  }

  async create(createClientDto: ClientDto): Promise<ClientResponseDto> {
    const clientExist = await this.clientRepository.findOne({
      gpon: createClientDto.gpon,
    });
    if (clientExist)
      throw new BadRequestException(
        `Client GPON ${createClientDto.gpon} exist`,
      );
    const client = await this.clientRepository.save(createClientDto);
    return ClientsMap.toDto(client);
  }

  async update(
    id: string,
    updateClientDto: ClientDto,
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
