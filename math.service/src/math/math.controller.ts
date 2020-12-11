import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { MATH_SERVICE } from './math.constants';
import { MathService } from './math.service';

@Controller()
export class MathController {

  constructor(
    @Inject(MATH_SERVICE) private readonly client: ClientProxy,
    private readonly service: MathService
  ) { }

  // @Get()
  // execute(): Observable<number> {
  //   const pattern = { cmd: 'sum' };
  //   const data = [1, 2, 3, 4, 5];
  //   return this.client.send<number>(pattern, data);
  // }

  @MessagePattern({ cmd: 'mul' })
  sum(data: number[]): number {
    return this.service.mul(data);
  }

  @MessagePattern('sum')
  add(data: number[]): number {
    return this.service.sum(data);
  }
}
