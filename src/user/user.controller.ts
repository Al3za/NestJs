import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { User } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  private readonly logger = new Logger(UserController.name);
  @Post()
  async create(@Body() user: User): Promise<void> {
    // @Body mean that we want the body of the users post request
    this.userService.createUser(user);
  } // this.logger.debug(`got new user ${JSON.stringify(user)}`);

  @Get()
  async showAllUsers(): Promise<User[]> {
    const allUsers = await this.userService.listAllUser();
    return allUsers;
  }
  @Get(':name')
  async getSpecData(@Param('name') name: string): Promise<User> {
    const getIdUser = await this.userService.findSpec(name);
    return getIdUser;
  }

  @Delete(':deleteId')
  async cancel(@Param('deleteId') deleteId: string): Promise<void> {
    await this.userService.cancelOne(deleteId);
  }
}
