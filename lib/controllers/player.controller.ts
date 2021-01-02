import Player from "../models/player.model";
import { Request, Response } from "express";

let players:Object = [
  {id: '1', name:'a', lastgame:new Date('2020-01')},
  {id: '2', name:'b', lastgame:new Date('2020-01')},
  {id: '3', name:'c', lastgame:new Date('2020-02')},
  {id: '4', name:'d', lastgame:new Date('2020-03')},
  {id: '5', name:'e', lastgame:new Date('2020-03')},
];

// players who haven't played since specific date
export const player_last_game = function(req:Request, res:Response) {
  let status:number = 200;
  let result:string[] = [];
  let date:Date = new Date(req.params.date);

  try{
    Object.entries(players).forEach(([key, value]) => {
      if(value.lastgame < date){ result.push(value.id); }
    });
    
    if(result.length === 0){ status = 204; }
    
    res.status(status).json(result);
  }catch(err){
    res.status(500).send(err);
  }
};

// Average review above 5 stars
export const player_game_review_bFive = function(req:Request, res:Response) {
  let numGames:string = req.params.numGames;
  let avgRating:string = req.params.avgRating;

// Student.findOne({_id:req.params.id}, function(err, student){
//        if(!err && student){
//            Courses.find({student_id:req.params.id},function(error,courses){
//                 if(!error && courses){
//                     student.courses=courses;
//                 }else{
//                     student.courses=[];
//                 }
//                 res.send(student);
//            });
//        }
// });

  res.send('NOT IMPLEMENTED: Player rating: ' + req.params.id);
};
