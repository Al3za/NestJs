import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(Useritem: User): Promise<void> {
    const createUserNew = new this.userModel(Useritem);
    await createUserNew.save();
  }

  async listAllUser(): Promise<User[]> {
    const allUsers = await this.userModel.find().exec();
    return allUsers;
  }

  async findSpec(item: string): Promise<User | undefined> {
    const takeOne = await this.userModel.findOne({ username: item }).exec();
    return takeOne;
  }

  async cancelOne(del: string): Promise<void> {
    await this.userModel.deleteOne({ username: del });
  }
}
