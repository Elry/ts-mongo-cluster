import { IField } from './field.model';
import mongoose, { Schema, Document } from 'mongoose';

export interface IFieldAvailability extends Document {
  time:string,
  status:boolean,
  field:IField['_id']
}

const fieldAvailabilitySchema:Schema = new Schema({
  status:Boolean,
  time: {type:String, required:true},
  field: {type:Schema.Types.ObjectId}
});

export default mongoose.model<IFieldAvailability>('FieldAvailability', fieldAvailabilitySchema);
