import { Injectable } from '@nestjs/common';
import { ToDo } from './todo/to-do.interface';

@Injectable()
export class AppService {
  getTodo(): ToDo {
    return {
      id: 1,
      text: 'hallo world',
      timeStamp: new Date(),
      author: 'ale',
    };
  }
}
