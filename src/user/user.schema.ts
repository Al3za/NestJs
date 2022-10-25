/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  id: number;
  @Prop()
  username: string;
  @Prop()
  password: string;
}

export type UserDocument = User & Document;
// det gör att User types blir av samma typ som mongoose schema property

export const UserSchema = SchemaFactory.createForClass(User);
