import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Solicitation } from 'src/database/entities/solicitation.entity';

import { SolicitationController } from './solicitation.controller';
import { SolicitationService } from './solicitation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitation])],
  controllers: [SolicitationController],
  providers: [SolicitationService],
})
export class SolicitationModule {}
