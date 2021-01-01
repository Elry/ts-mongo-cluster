import Player from "../models/player.model";
import { Request, Response } from "express";

// players who haven't played since specific date
export const player_last_game = function(req:Request, res:Response) {
  res.send(`NOT IMPLEMENTED: Player last game ${req.params.date}`);
};

// Average review above 5 stars
export const player_game_review_bFive = function(req:Request, res:Response) {
  res.send('NOT IMPLEMENTED: Player rating: ' + req.params.id);
};
