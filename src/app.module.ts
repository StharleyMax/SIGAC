import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AlarmsModule } from './api/alarms/alarms.module';
import { AnswerModule } from './api/answer/answer.module';
import { ClientsModule } from './api/clients/clients.module';
import { SolicitationModule } from './api/solicitation/solicitation.module';
import { UsersModule } from './api/users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    DatabaseModule,
    ClientsModule,
    AlarmsModule,
    SolicitationModule,
    AnswerModule,
  ],
})
export class AppModule {}
