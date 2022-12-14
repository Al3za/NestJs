/* eslint-disable prettier/prettier */
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
// det gör att User types blir av samma typ som mongoose schema property

export const todoSchema = SchemaFactory.createForClass(ToDo);
