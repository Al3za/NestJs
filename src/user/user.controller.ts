import { Controller, Get, Post } from '@nestjs/common';
import { User } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async create(user: User): Promise<void> {
    const createNewUser = await this.userService.createUser(user);
  }
}
