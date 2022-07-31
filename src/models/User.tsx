import { model, Schema, Document } from "mongoose";
import { IGame } from "./Game";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  gamesPlayed: IGame["timesPlayed"];
}

const UserSchema: Schema = new Schema({
  username: { 
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gamesPlayed: {
    type: Number,
    required: true,
    default: 0
  }
});

export default model<IUser>("User", UserSchema);
