import Field from "../models/field.model";
import { Request, Response } from "express";
import fieldAvailabilities from "../models/field_availability.model";

// unutilized field availability
export const unutilized_field_availability = async function(req:Request, res:Response) {
  let count:number = 0;
  let status:number = 200;
  let fieldId:string = req.params.fieldId;
  let endDate:string = req.params.endDate;
  let startDate:string = req.params.startDate;
  let searchParams:object = {"fieldId": fieldId, time:{ $gte: startDate, $lte: endDate }};

  try{
    await fieldAvailabilities.find(searchParams, function(err, result) {
      if (err) {
        status = 500;
        console.log(err);
      } else { count++; }
    });
    if(!count){ status = 204; }

    res.status(status).json(count);
  }catch(err){
    res.status(500).send(err);
  }
};