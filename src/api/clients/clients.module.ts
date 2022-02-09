import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Client } from 'src/database/entities/clients.entity';

import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}
