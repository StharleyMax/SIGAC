import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [User],
    }),
  ],
})
export class DatabaseModule {}
