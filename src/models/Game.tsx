import { model, Schema, Document } from "mongoose";

export interface IGame extends Document {
  timesPlayed: number;
}

const GameSchema: Schema = new Schema({
  timesPlayed: { 
    type: Number,
    required: true
  }
});

export default model<IGame>("Game", GameSchema);
