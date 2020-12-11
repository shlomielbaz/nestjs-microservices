import { Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('/')
export class AppController {
  private logger = new Logger('AppController');
  
  constructor(private readonly service: MathService) { }

  @Get()
  getHello(): string {
    return 'hello world';
  }

  @Post()
  accumulate(@Body('data') data: number[]){
    return  this.service.accumulate(data);
  }
}
