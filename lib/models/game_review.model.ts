import { IGame } from './game.model';
import { IPlayer } from './player.model';
import mongoose, { Schema, Document } from 'mongoose';

export interface IGameReview extends Document {
  stars:string,
  comment:string,
  gameId: IGame['_id'],
  playerId: IPlayer['_id']
}

const gameReviewSchema:Schema = new Schema({
  comment: {type: String},
  stars: {type:String, required:true},
  gameId: {type:Schema.Types.ObjectId},
  playerId: {type:Schema.Types.ObjectId},
});

export default mongoose.model<IGameReview>('GameReview', gameReviewSchema);