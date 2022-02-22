import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AnswerService } from './answer.service';
import { AnswerResponseDto } from './dto/answer-response.dto';
import { AnswerDto } from './dto/answer.dto';

@Controller('answer')
@UseGuards(AuthGuard('jwt'))
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  create(@Body() createAnswerDto: AnswerDto): Promise<AnswerResponseDto> {
    return this.answerService.create(createAnswerDto);
  }

  @Get()
  findAll(): Promise<AnswerResponseDto[]> {
    return this.answerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AnswerResponseDto> {
    return this.answerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnswerDto: AnswerDto,
  ): Promise<AnswerResponseDto> {
    return this.answerService.update(id, updateAnswerDto);
  }
}
