import { EntityRepository, Repository } from 'typeorm';

import { Client } from '../entities/clients.entity';

@EntityRepository(Client)
export class AlarmResitory extends Repository<Client> {}
