import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Client } from './entities/clients.entity';
import { User } from './entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [User, Client],
    }),
  ],
})
export class DatabaseModule {}
