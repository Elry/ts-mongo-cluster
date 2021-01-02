import { IField } from './field.model';
import mongoose, { Schema, Document } from 'mongoose';

export interface IFieldAvailability extends Document {
  time:string,
  status:boolean,
  fieldId:IField['_id']
}

const fieldAvailabilitySchema:Schema = new Schema({
  status: {type:Boolean},
  time: {type:Date, required:true},
  fieldId: {type:Schema.Types.ObjectId},
},{collection: "field-availability"});

export default mongoose.model<IFieldAvailability>('FieldAvailability', fieldAvailabilitySchema);
