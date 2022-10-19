import { Injectable } from '@nestjs/common';
import { ToDo } from './to-do.interface';

@Injectable()
export class TodoService {
  private readonly todos: ToDo[] = [];

  create(todo: ToDo) {
    this.todos.push(todo);
  }

  findAll(): ToDo[] {
    return this.todos;
  }

  findOne(id: number): ToDo | undefined {
    return this.todos.find((item) => item.id === id);
  }
}
