import { EntityRepository, Repository } from 'typeorm';

import { Solicitation } from '../entities/solicitation.entity';

@EntityRepository(Solicitation)
export class SolicitationRepository extends Repository<Solicitation> {}
