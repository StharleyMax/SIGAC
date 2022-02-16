import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindConditions, FindOneOptions, Repository } from 'typeorm';

import { Solicitation } from '../../database/entities/solicitation.entity';
import { SolicitationRequestDto } from './dto/solicitation-request.dto';
import { SolicitationResponseDto } from './dto/solicitation-response.dto';
import { SolicitationStatus } from './enum/solicitation-status.enum';

@Injectable()
export class SolicitationService {
  constructor(
    @InjectRepository(Solicitation)
    private readonly solicitationRepository: Repository<Solicitation>,
  ) {}

  async create(createSolicitationDto: SolicitationRequestDto) {
    return this.solicitationRepository.save({
      ...createSolicitationDto,
      status: SolicitationStatus.INIT,
    });
  }

  async findAll(): Promise<SolicitationResponseDto[]> {
    return this.solicitationRepository.find({ relations: ['user', 'client'] });
  }

  async findOne(
    conditions: FindConditions<Solicitation>,
    options?: FindOneOptions<Solicitation>,
  ) {
    return this.solicitationRepository.findOneOrFail(conditions, options);
  }

  async update(id: string, updateSolicitationDto: SolicitationRequestDto) {
    const { description, complaint } = updateSolicitationDto;

    const existSolicitation = await this.solicitationRepository.findOne(id);

    if (!existSolicitation)
      throw new NotFoundException('solicitaton not exist');

    const updateSolicitation = await this.solicitationRepository.preload({
      id,
      complaint,
      description,
    });

    return this.solicitationRepository.save(updateSolicitation);
  }
}
