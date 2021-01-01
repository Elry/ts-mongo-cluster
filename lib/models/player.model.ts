import mongoose, { Schema, Document } from 'mongoose';
// import { IUser } from './user.model';


export interface IPlayer extends Document {
  name: string;
  lastGame: string;
  // owner: IUser['_id'];
}

const playerSchema:Schema = new Schema({
  name: {type:String,required: true},
  lastGame: {type:String}
});

export default mongoose.model<IPlayer>('Player', playerSchema);
