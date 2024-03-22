import { Schema, Types } from 'mongoose';

export interface AccountDB {
  _id: Types.ObjectId,
  active: boolean,
  email: string,
  name: string,
  password: string,
}

export const accountDbSchema: Schema = new Schema<AccountDB>(
  {
    active: {
      default: true,
      type: Boolean,
      required: true,
    },
    email: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
);
