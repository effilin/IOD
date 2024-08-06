const { Socket } = require("dgram");
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");


const server = http.createServer(app);
const port = 3001; 
const io = new Server(server);


app.get("/", (req, res) => {
 res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg)
    })
})

server.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`);
})
