const express = require("express");
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server= http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }

});

io.on("connection", (socket) => {

    socket.on("bouton", (data) => {
        console.log(data, socket.id)

        socket.broadcast.emit("bouton_reponse", data);
    })

    socket.on('message', (data) => {
        console.log(data)
        socket.broadcast.emit('message_reponse', data)

    })





    

});







server.listen(3000, ()=>{
    console.log('serveur OK')
})