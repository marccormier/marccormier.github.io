// Simple WebSocket
// https://gist.github.com/benixal/0c811339111dbbabdb92c1e6b9354de6#file-server-js
/*

1.install ws:

npm install ws

2. run:

node server.js


*/

const WebSocket = require("ws");

const server = new WebSocket.Server({
    host: "localhost",
    port: 4600
});

console.log("Server is Ready!");

server.on("connection" , (socket) => {

    client = socket;

    console.log("Someone is connected!");

    socket.on("message" , (message) => {

        console.log("Client:" , message.toString());

    });

});

process.stdin.on("data" , (data)=> {
   
    client.send(data.toString().trim());

});