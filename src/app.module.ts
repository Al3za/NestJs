/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, todoSchema } from './todo/to-do.schema';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User, UserSchema } from './user/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/MyNestTodos'),
    // här anger vi att vi vill använda mongoDB databasn
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: ToDo.name, schema: todoSchema },
    ]),
    // och här anger vi vilket schema vi vill använda
  ],
  controllers: [TodoController, UserController],
  providers: [TodoService, UserService],
})
export class AppModule {}
