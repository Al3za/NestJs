/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, todoSchema } from './todo/to-do.schema';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User, UserSchema } from './user/user.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      //skapa mongooseModule asynkron för att vi ska läsa för .Env config module och importera det
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => ({
        // useFactory använder vi för att ge lite parametrar; i detta fall useFactory tar emot configService som sedan används i rad nedan för att anropa env.variable
        uri: ConfigService.get<string>('MONGODB_URL'),
        // uri: process.env.MONGODB_URL as string hade oxå funkat, men som vi skrev övan är bättre för att vi är säkra att vi fick rätt env variable, tack vare typen vi anger i .get<string>
      }),
      inject: [ConfigService],
      // här vi initiera ConfigServices så att vi har tillgång till .env variabler som vi har
    }),
    // här anger vi att vi vill använda mongoDB databasn
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: ToDo.name, schema: todoSchema },
    ]), // och här anger vi vilket schema vi vill använda
  ],
  controllers: [TodoController, UserController],
  providers: [TodoService, UserService],
})
export class AppModule {}
