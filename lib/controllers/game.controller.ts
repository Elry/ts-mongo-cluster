import { Request, Response } from "express";
import GameReview from "../models/game_review.model";

export const game_review_below_five = function(req:Request, res:Response) {
  let numGames:string = req.params.numGames;
  let avgRating:string = req.params.avgRating;

// 5ff1107c769d343a2ccbcc3f
// 5ff0fa18769d343a2ccbcc3d
}