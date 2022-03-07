import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

//import * as momentTimeZone from 'moment-timezone';

import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filter/Http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionsFilter());

  const config = new DocumentBuilder()
    .setTitle('NestJS Swagger')
    .setDescription('API description')
    .setVersion('v1')
    .build();

  /*Date.prototype.toJSON = function (): any {
    return momentTimeZone(this)
      .tz('America/Sao_Paulo')
      .format('YYYY-MM-DD HH:mm:ss.SSS');
  };*/

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
