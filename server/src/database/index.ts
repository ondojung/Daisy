import { Rooms,IRooms } from './models/Rooms'

export default class DB {
    static async addRoom(rooms:IRooms){
        const room = new Rooms(rooms);
        const result = await room.save();
        
        return result._id
    }
}