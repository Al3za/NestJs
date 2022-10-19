import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ToDo } from './todo/to-do.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTodo(): ToDo {
    return this.appService.getTodo();
  }
}
