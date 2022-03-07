import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SolicitationRepository } from '../../database/repositories/solicitation.repository';
import { SolicitationController } from './solicitation.controller';
import { SolicitationService } from './solicitation.service';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitationRepository])],
  controllers: [SolicitationController],
  providers: [SolicitationService],
})
export class SolicitationModule {}
