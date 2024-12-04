import { connect } from 'mongoose';
import {Server} from './server'

const server = new Server();

server.start(8000);

run().catch(err => console.log(err));

async function run() {
  await connect('mongodb+srv://ondojung:4g6OivIoOSRsyDGH@daisy.jupll.mongodb.net/?retryWrites=true&w=majority&appName=Daisy');
  console.log('Conneted To Database')
}