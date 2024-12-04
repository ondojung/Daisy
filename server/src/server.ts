import express from 'express'
import bodyParser from 'body-parser'

var app = require("express")();
const http = require("http").createServer(app);
const io = require('socket.io')(http, { cors: { origin: "*" } });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', require('./api'));


export class Server {
  public start(port: number) {
    const httpServer = http.listen(port, () => {
     console.log(`Connected To Port ${port}`);
    });
    io.on('connection', function (socket:any) {
        
        socket.on('join_room', (_id:number)=>{
            console.log(socket.rooms);
            socket.join(_id)
        }) 
        
        socket.on('emit_msg', (data:any)=>{
            console.log(data);
            data.isMe=false
            socket.broadcast.to(data.roomID).emit('receive_msg',data);
        }) 
        
    }) 
  }
}
