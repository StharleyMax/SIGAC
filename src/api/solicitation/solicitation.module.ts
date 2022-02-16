import { Module } from '@nestjs/common';

import { SolicitationController } from './solicitation.controller';
import { SolicitationService } from './solicitation.service';

@Module({
  controllers: [SolicitationController],
  providers: [SolicitationService],
})
export class SolicitationModule {}
