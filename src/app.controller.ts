import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get()
  @ApiTags('Utilities Test')
  // @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }
}
