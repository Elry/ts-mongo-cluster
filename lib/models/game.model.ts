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
  startTime:Date,
  teamSize:Number,
  fieldId: {type:Schema.Types.ObjectId},
  players: [{type:Schema.Types.ObjectId}],
  availabilityId: {type:Schema.Types.ObjectId},
});

export default mongoose.model<IGame>('Game', gameSchema);