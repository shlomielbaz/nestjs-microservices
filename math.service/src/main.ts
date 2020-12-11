import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module';

const logger = new Logger('Main');

const options: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 3001,
    retryAttempts: 5,
    retryDelay: 3000
  },
}

async function bootstrap() {
  /**
   * This example contains a hybrid application (HTTP + TCP)
   * You can switch to a microservice with NestFactory.createMicroservice() as follows:
   *
   * const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
   *  transport: Transport.TCP,
   *  options: { retryAttempts: 5, retryDelay: 3000 },
   * });
   * await app.listenAsync();
   *
   */
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, options);

  app.listen(() => {
    logger.log('Microservice listening...')
  });

}
bootstrap();
