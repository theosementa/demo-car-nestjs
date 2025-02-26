import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import logger from './logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  logger.info('NestJS API is starting...');

  await app.listen(3000, () => {
    logger.info('API is running on port 3000');
  });
}

bootstrap();
