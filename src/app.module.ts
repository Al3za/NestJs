import { Module } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, todoSchema } from './todo/to-do.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/MyNestTodos'),
    MongooseModule.forFeature([{ name: ToDo.name, schema: todoSchema }]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
