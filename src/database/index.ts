import { Dexie, type EntityTable } from 'dexie';
import MyRooms from './models/MyRooms'

export default class DB{
    db;
    constructor() {
        this.db = new Dexie('Daisy') as Dexie & {
            my_rooms: EntityTable<MyRooms, 'id'>;
        };
        this.db.version(1).stores({
          my_rooms: 'id, name, icon',
        });
    }
    async addRoom(data){
        await this.db.my_rooms.add(data);
    }
    async getAllRoom(){
        const data = await this.db.my_rooms
        .toArray();
        return data
    }
}