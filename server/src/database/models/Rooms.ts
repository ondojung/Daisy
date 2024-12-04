import { Schema, model, connect,Types } from 'mongoose';

export interface IRooms {
  name: string;
  icon?: string;
  overview?: string;
  isPrivate: boolean;
}


const roomsSchema = new Schema<IRooms>({
  name: { type: String, required: true },
  icon: String,
  overview: String,
  isPrivate:Boolean
});

export const Rooms = model<IRooms>('Rooms', roomsSchema);
