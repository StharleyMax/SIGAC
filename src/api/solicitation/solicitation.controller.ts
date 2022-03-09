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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { SolicitationResponseDto } from './dto/solicitation-response.dto';
import { SolicitationDto } from './dto/solicitation.dto';
import { SolicitationService } from './solicitation.service';

@Controller('solicitation')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Client')
export class SolicitationController {
  constructor(private readonly solicitationService: SolicitationService) {}

  @Post()
  @ApiOperation({ summary: 'Create new solicitation' })
  @ApiResponse({
    status: 201,
    description: 'Create Solicitation',
    type: SolicitationResponseDto,
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  create(
    @Body() createSolicitationDto: SolicitationDto,
    @CurrentUser() user,
  ): Promise<SolicitationResponseDto> {
    return this.solicitationService.create(createSolicitationDto, user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'Find All Solicitation by user' })
  @ApiResponse({
    status: 200,
    description: 'show all solicitation for user',
    type: [SolicitationResponseDto],
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  findAll(@CurrentUser() user) {
    return this.solicitationService.findAll(user.userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find  Solicitation by id for user' })
  @ApiResponse({
    status: 200,
    description: 'show solicitation',
    type: SolicitationResponseDto,
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  @ApiResponse({ status: 404, description: 'not found solicitation' })
  findOne(
    @Param('id') id: string,
    @CurrentUser() user,
  ): Promise<SolicitationResponseDto> {
    return this.solicitationService.findOne(id, user.userId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Solicitation' })
  @ApiResponse({
    status: 200,
    description: 'update',
    type: SolicitationResponseDto,
  })
  @ApiResponse({ status: 401, description: 'unauthorized access' })
  @ApiResponse({ status: 404, description: 'not found solicitation' })
  update(
    @Param('id') id: string,
    @Body() updateSolicitationDto: SolicitationDto,
  ): Promise<SolicitationResponseDto> {
    return this.solicitationService.update(id, updateSolicitationDto);
  }
}
