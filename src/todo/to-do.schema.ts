import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ToDo {
  @Prop()
  id: number;
  @Prop()
  text: string;
  @Prop()
  timeStamp: Date;
  @Prop()
  author: string;
}

export type TodoDocument = ToDo & Document;

export const todoSchema = SchemaFactory.createForClass(ToDo);
