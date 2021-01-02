import Field from "../models/field.model";
import { Request, Response } from "express";
import FieldAvailability from "lib/models/field_availability.model";

// unutilized field availability
export const unutilized_field_availability = function(req:Request, res:Response) {
  let count:number = 0;
  let status:number = 200;
  let fieldId:string = req.params.fieldId;
  let endDate:Date = new Date(req.params.endDate);
  let startDate:Date = new Date(req.params.startDate);

  try{
    FieldAvailability.findById({fieldId:fieldId}, function(err, fieldAv){
      if(fieldAv){
        console.log(fieldAv);
        fieldAv.array.forEach(element => {
          let availabilityTime = new Date(element.time);
          (availabilityTime > startDate && availabilityTime < endDate) ? count++ : 0;  
        });
      }else{ status = 204; }
    });
    
    res.status(status).json(count);
  }catch(err){
    res.status(500).send(err);
  }
};