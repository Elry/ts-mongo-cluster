import { Request, Response } from "express";
import Player, { IPlayer } from "../models/player.model";

// players who haven't played since specific date
export const player_last_game = async function(req:Request, res:Response) {
  let status:number = 200;
  let final:IPlayer[] = [];
  let date:Date = new Date(req.params.date);
  let searchParams:object = {lastGame: {$gte:date}};

  Player.find(searchParams)
    .then(function(players){
      res.status(status).json(players);
    })
    .catch(function(err){
      res.status(500).json(err);
    });
};