import mongoose, { Schema, Document } from 'mongoose';

export interface IField extends Document {
  name:string,
  description:string,
  type:string,
  directions: {
    number:number,
    street:string,
    district:string,
    coordinates: {
      lat:string,
      long:string
    }
  },
  photosUrl: string[],
  fieldAvailabilities: string[]
}

const fieldSchema:Schema = new Schema({
  name: {type:String, required: true},
  description:{type:String},
  type:{type:String},
  directions:{
    number: {type:Number},
    street:{type:String},
    district:{type:String},
    coordinates:{
      lat:{type:String},
      long:{type:String}
    }
  },
  photosUrl:{type:Array},
  fieldAvailabilities:[{type:Schema.Types.ObjectId, ref:'field-availability'}]
},{collection: "field"});

export default mongoose.model<IField>('Field', fieldSchema);
