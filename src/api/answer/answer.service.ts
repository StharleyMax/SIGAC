import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Answer } from 'src/database/entities/answer.entity';
import { Repository } from 'typeorm';

import { AnswerResponseDto } from './dto/answer-response.dto';
import { AnswerDto } from './dto/answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  async create(createAnswerDto: AnswerDto): Promise<AnswerResponseDto> {
    return this.answerRepository.save(createAnswerDto);
  }

  async findAll(): Promise<AnswerResponseDto[]> {
    return this.answerRepository.find();
  }

  async findOne(id: string): Promise<AnswerResponseDto> {
    const answer = await this.answerRepository.findOne(id);

    if (!answer) throw new NotFoundException(`Answer #${id} not found`);

    return answer;
  }

  async update(
    id: string,
    updateAnswerDto: AnswerDto,
  ): Promise<AnswerResponseDto> {
    await this.findOne(id);

    const { status, description } = updateAnswerDto;
    const updateAnswer = await this.answerRepository.preload({
      id,
      status,
      description,
      updatedAt: Date(),
    });

    return this.answerRepository.save(updateAnswer);
  }
}
