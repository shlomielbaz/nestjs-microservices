import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { Injectable, Logger } from '@nestjs/common';

const logger = new Logger('MathService');

@Injectable()
export class MathService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001
      }
    })
  }

  async accumulate(data: number[]) {
     return await this.client
      .send<number, number[]>('sum', data);
  }
}