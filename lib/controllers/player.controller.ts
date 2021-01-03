import { Request, Response } from "express";
import Player, { IPlayer } from "../models/player.model";

// players who haven't played since specific date
export const player_last_game = async function(req:Request, res:Response) {
  let status:number = 200;
  let final:IPlayer[] = [];
  let date:Date = new Date(req.params.date);

  Player.find({})
    .then(function(result){
      result.forEach(ele => {
        if(date >= new Date(ele.lastGame)){
          final.push(ele); 
        }
      });

      if(final.length === 0){ status = 204; }
      res.status(status).json(final);
    })
    .catch(function(err){
      res.status(500).json(err);
    });
};