import { Request, Response } from "express";
import GameReview from "../models/game_review.model";
import Players, { IPlayer } from "../models/player.model";

export const game_review_below_five = function(req:Request, res:Response):void {
  let status:number = 200;
  let final:IPlayer[] = [];
  let numGames:number = Number(req.params.numGames);
  let avgRating:number = Number(req.params.avgRating);
  
  /*
  GameReview.aggregate([
    { $group: { _id: {player: "$playerId", stars: "$stars"}}},
    {$group: { _id: "$playerId", "avgStar": { "$avg": "$stars" }}}
  ]).then(function(result){
      result.map(ele=>{
        console.log("loop", ele);
      });
      if(avgRating >= res.avgStar){
        console.log("as expected", res);
      }
    res.status(status).json(result);
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json(err);
  });
  */ 

  Players.find({})
    .then(async function(players){
      Promise.all(players.map(async player => {
        let playerid = await GameReview.find({"playerId":player.id}).limit(numGames)
          .then(function(reviews){
            if(numGames > reviews.length){  numGames = reviews.length; }
            let holder:number = 0;

            reviews.forEach(review => {
              holder += Number(review.stars);
            });

            if(avgRating >= (holder/numGames)){
              return player.id;
            }
          });
        final.push(playerid);
      }))
      .then(() => {
        res.status(status).json(final);
      })
      .catch(function(err){ throw err; });
    })
    .catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });  
}