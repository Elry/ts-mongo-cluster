import { Request, Response } from "express";
import fieldAvailabilities from "../models/field_availability.model";

// unutilized field availability
export const unutilized_field_availability = function(req:Request, res:Response):void {
  let count:number = 0;
  let status:number = 200;
  let fieldId:string = req.params.fieldId;
  let endDate:string = req.params.endDate;
  let startDate:string = req.params.startDate;
  let searchParams:object = {"fieldId": fieldId, time:{ $gte: startDate, $lte: endDate }};

  fieldAvailabilities.find(searchParams)
    .then(function(result){
      result.forEach(ele => { count++; });
      
      res.status(status).json(count);
    })
    .catch(function(err){
      console.log(err);
      res.status(500).send(err);
    });
};