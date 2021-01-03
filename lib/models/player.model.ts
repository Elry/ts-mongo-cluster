import { IField } from './field.model';
import mongoose, { Schema, Document } from 'mongoose';

export interface IPlayer extends Document {
  name:string,
  email:string[],
  lastGame:Date,
  fields: IField['_id']
}

const playerSchema:Schema = new Schema({
  email: {type:Array},
  lastGame: {type:Date},
  name: {type:String,required: true},
  fields: [{type:Schema.Types.ObjectId, ref:'field'}]
},{collection: "players"});

export default mongoose.model<IPlayer>('Player', playerSchema);
