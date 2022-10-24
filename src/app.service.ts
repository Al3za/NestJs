/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ToDo } from './todo/to-do.schema';

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
