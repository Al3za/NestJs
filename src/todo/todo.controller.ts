import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { ToDo } from './to-do.schema';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  private readonly logger = new Logger(TodoController.name);

  @Post()
  async create(@Body() todo: ToDo): Promise<void> {
    // this.logger.debug(`got new todo ${JSON.stringify(todo)}`);
    this.todoService.create(todo);
  }

  @Get()
  async findAll(): Promise<ToDo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ToDo> {
    this.logger.debug(`search todo with id ${typeof id}  `);
    const todo = await this.todoService.findOne(id);
    if (!todo) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    this.logger.debug(`Found todo ${JSON.stringify(todo)}`);
    return todo;
  }
}
