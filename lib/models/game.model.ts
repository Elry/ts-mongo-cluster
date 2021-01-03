import { IField } from './field.model';
import { IPlayer } from './player.model';
import mongoose, { Schema, Document } from 'mongoose';
import { IFieldAvailability } from './field_availability.model';

export interface IGame extends Document {
  startTime: Date,
  teamSize: Number,
  fieldId: IField['_id'],
  players: [IPlayer['_id']],
  availabilityId: IFieldAvailability['_id']
}

const gameSchema:Schema = new Schema({
  startTime: {type:Date},
  teamSize: {type:Number},
  fieldId: {type:Schema.Types.ObjectId, ref:'field'},
  players: [{type:Schema.Types.ObjectId, ref:'players'}],
  availabilityId: {type:Schema.Types.ObjectId, ref:'field-availability'},
},{collection: "game"});

export default mongoose.model<IGame>('Game', gameSchema);