import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDo, TodoDocument } from './to-do.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(ToDo.name) private todoModel: Model<TodoDocument>) {}

  async create(todo: ToDo): Promise<void> {
    const createTodo = new this.todoModel(todo);
    await createTodo.save();
  }

  async findAll(): Promise<ToDo[]> {
    const allTodos = await this.todoModel.find().exec();
    return allTodos;
  }

  async findOne(id: number): Promise<ToDo | undefined> {
    const findIdTodo = await this.todoModel.findOne({ id: id }).exec();
    return findIdTodo;
  }
}
