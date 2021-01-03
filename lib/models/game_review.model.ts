import { IGame } from './game.model';
import { IPlayer } from './player.model';
import mongoose, { Schema, Document } from 'mongoose';

export interface IGameReview extends Document {
  stars:number,
  comment:string,
  gameId: IGame['_id'],
  playerId: IPlayer['_id']
}

const gameReviewSchema:Schema = new Schema({
  comment: {type: String},
  stars: {type:Number, required:true},
  gameId: {type:Schema.Types.ObjectId, ref:'game'},
  playerId: {type:Schema.Types.ObjectId, ref:'player'},
},{collection: "game-review"});

export default mongoose.model<IGameReview>('GameReview', gameReviewSchema);