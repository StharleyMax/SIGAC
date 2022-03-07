import { Injectable, NotFoundException } from '@nestjs/common';

import { SolicitationRepository } from 'src/database/repositories/solicitation.repository';

import { SolicitationResponseDto } from './dto/solicitation-response.dto';
import { SolicitationDto } from './dto/solicitation.dto';
import { SolicitationStatus } from './enum/solicitation-status.enum';
import { SolicitationMap } from './map/solicitation.map';

@Injectable()
export class SolicitationService {
  constructor(
    private readonly solicitationRepository: SolicitationRepository,
  ) {}

  async create(
    createSolicitationDto: SolicitationDto,
  ): Promise<SolicitationResponseDto> {
    const create = await this.solicitationRepository.save({
      ...createSolicitationDto,
      status: SolicitationStatus.INIT,
    });
    return SolicitationMap.toDto(create);
  }

  async findAll() {
    const solicitations = await this.solicitationRepository.find({
      relations: ['user', 'client', 'answer'],
    });
    return SolicitationMap.allToDto(solicitations);
  }

  async findOne(id: string): Promise<SolicitationResponseDto> {
    return this.solicitationRepository.findOne(id, {
      relations: ['user', 'client', 'answer'],
    });
  }

  async update(
    id: string,
    updateSolicitationDto: SolicitationDto,
  ): Promise<SolicitationResponseDto> {
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
