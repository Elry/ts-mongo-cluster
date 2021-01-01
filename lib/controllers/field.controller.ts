import Field from "../models/field.model";
import { Request, Response } from "express";

// unutilized field availability
export const unutilized_field_availability = function(req:Request, res:Response) {
  let fieldId:string = req.params.fieldId;
  let endData:string = req.params.endDate;
  let startDate:string = req.params.startDate;

  res.send('NOT IMPLEMENTED: Field availability list');
};