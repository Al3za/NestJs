import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { ToDo } from './to-do.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  private readonly logger = new Logger(TodoController.name);

  @Post()
  create(@Body() todo: ToDo) {
    // this.logger.debug(`got new todo ${JSON.stringify(todo)}`);
    this.todoService.create(todo);
  }

  @Get()
  findAll(): ToDo[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): ToDo {
    this.logger.debug(`search todo with id @{id}  `);
    const todo = this.todoService.findOne(id);
    this.logger.debug(`Found todo ${JSON.stringify(todo)}`);
    return todo;
  }
}
