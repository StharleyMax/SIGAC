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

import { SolicitationRequestDto } from './dto/solicitation-request.dto';
import { SolicitationDto } from './dto/solicitation.dto';
import { SolicitationService } from './solicitation.service';

@Controller('solicitation')
@UseGuards(AuthGuard('jwt'))
export class SolicitationController {
  constructor(private readonly solicitationService: SolicitationService) {}

  @Post()
  create(@Body() createSolicitationDto: SolicitationDto) {
    return this.solicitationService.create(createSolicitationDto);
  }

  @Get()
  findAll() {
    return this.solicitationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitationService.findOne(
      { id },
      { relations: ['user', 'client'] },
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSolicitationDto: SolicitationRequestDto,
  ) {
    return this.solicitationService.update(id, updateSolicitationDto);
  }
}
