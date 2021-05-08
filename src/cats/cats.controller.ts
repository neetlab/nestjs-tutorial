import { Controller, Get, Ip, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  descriptive(): string {
    return 'This action returns all cats';
  }

  @Get('json')
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get('ip-address')
  findIpAddress(
    @Ip()
    ip,
  ): string {
    return ip;
  }

  @Get('query')
  findQuery(
    @Query('q')
    q,
  ): string {
    return q;
  }

  @Get('user-agents')
  findUserAgents(
    @Req()
    request: Request,
  ): string {
    return request.headers['user-agent'] ?? 'default';
  }
}
