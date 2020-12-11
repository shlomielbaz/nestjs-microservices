import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  
  sum(data: number[]): number {
    return (data || []).reduce((a, b) => Number(a) + Number(b));
  }

  mul(data: number[]): number {
    return (data || []).reduce((a, b) => Number(a) * Number(b));
  }
}
