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
    if (typeof data === 'string') {
      logger.log('data provided as a string format, attempt to fix it.');
      const temp = (data as string).trim();
      if (temp[0] === '[' && temp[temp.length - 1] === ']') {
        data = JSON.parse(temp);
      }
      else {
        data = temp.split(',').map(item => +item);
      }
    }

    if (data instanceof Array) {
      return await this.client
        .send<number, number[]>('sum', data);
    }

    throw new Error('Unsupported format');
  }
}