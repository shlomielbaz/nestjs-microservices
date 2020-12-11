import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MATH_SERVICE } from './math.constants';
import { MathController } from './math.controller';
import { MathService } from './math.service';

@Module({
  imports: [
    ClientsModule.register([{ name: MATH_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [MathController],
  providers: [MathService]
})
export class MathModule { }
