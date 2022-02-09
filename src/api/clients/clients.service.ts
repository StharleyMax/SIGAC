import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Client } from 'src/database/entities/clients.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async findById(id: string): Promise<Client> {
    return this.clientRepository.findOne({ id });
  }

  async create(body): Promise<Client> {
    console.log({ body });

    return this.clientRepository.save(body);
  }

  async update(id, body): Promise<Client> {
    const client = await this.clientRepository.findOne({ id });

    return this.clientRepository.save(client, { ...body });
  }
}
