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
  name: {type:String,required: true},
  description:String,
  type:String,
  directions:{
    number:Number,
    street:String,
    district:String,
    coordinates:{
      lat:String,
      long:String
    }
  },
  photosUrl:{type:Array},
  fieldAvailabilities:[{type:Schema.Types.ObjectId}]
});

export default mongoose.model<IField>('Field', fieldSchema);
