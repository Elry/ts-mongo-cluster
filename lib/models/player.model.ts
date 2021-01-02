import { IField } from './field.model';
import mongoose, { Schema, Document } from 'mongoose';

export interface IPlayer extends Document {
  name:string,
  email:string[],
  lastGame:string,
  fields: IField['_id']
}

const playerSchema:Schema = new Schema({
  email: {type:Array},
  lastGame: {type:String},
  name: {type:String,required: true},
  fields: {type:Schema.Types.ObjectId}
},{collection: "players"});

export default mongoose.model<IPlayer>('Player', playerSchema);
