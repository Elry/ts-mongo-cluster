import { Request, Response } from "express";
import Player, { IPlayer } from "../models/player.model";

// players who haven't played since specific date
export const player_last_game = async function(req:Request, res:Response) {
  let final:IPlayer[] = [];
  let status:number = 200;
  let date:Date = new Date(req.params.date);

  try{
    await Player.find({}, function(err, result){
      if(err){
        status = 500;  
        console.log(err);
      } else {
        result.forEach(ele => {
          if(date >= new Date(ele.lastGame)){
            final.push(ele); 
          }
        });
      }

      if(final.length === 0){ status = 204; }

      res.status(status).json(final);
    });
  }catch(err){
    res.status(500).json(err);
  }
};

// Average review above 5 stars
export const player_game_review_bFive = function(req:Request, res:Response) {
  let numGames:string = req.params.numGames;
  let avgRating:string = req.params.avgRating;

  
  // Student.findOne({_id:req.params.id}, function(err, student){
  //   if(!err && student){
  //     Courses.find({student_id:req.params.id},function(error,courses){
  //       if(!error && courses){
  //         student.courses=courses;
  //       }else{
  //         student.courses=[];
  //       }
  //       res.send(student);
  //     });
  //   }
  // });

  res.send('NOT IMPLEMENTED: Player rating: ' + req.params.id);
};
