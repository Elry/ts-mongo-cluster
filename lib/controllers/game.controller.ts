import { Request, Response } from "express";
import Players from "../models/player.model";
import GameReview from "../models/game_review.model";

export const game_review_below_five = function(req:Request, res:Response):void {
  let status:number = 200;
  let avgRating:string = req.params.avgRating;
  let numGames:number = Number(req.params.numGames);

  Players.find({})
    .then(function(players){
      players.forEach(player => {
        GameReview.find({"playerId":player.id}).limit(numGames)
          .then(function(reviews){
            let holder:number = 0;
            reviews.forEach(review => {
              holder += Number(review.stars);
            });

            console.log(holder/numGames);
          })
          .catch(function(err){
            console.log(err);
          });
      });
      res.status(status).json(players);
    })
    .catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
}