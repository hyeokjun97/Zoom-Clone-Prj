import http from "http";
//import WebSocket from "ws";
import SocketIO from "socket.io";
import express from "express";


const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res)=>res.redirect("/"));



const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket)=>{
    console.log(socket);
});


const handleListen = () => console.log(`Listening on http://localhost:3000`);
httpServer.listen(3000, handleListen);

//const wss = new WebSocket.Server({server});
//starting http and websocket in same server
//two protocols, http and ws.

//fake database
/*const sockets = [];

wss.on("connection", (socket) =>{
    sockets.push(socket);
    socket["nickname"] = "Anon";
    console.log("Connected to server✅");
    socket.on("close", ()=> console.log("Disconnected from the Browser❌"));
    socket.on("message", (msg)=>{
        const message = JSON.parse(msg);
        switch(message.type){
            case "new_message":
                sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${message.payload}`));
            case "nickname":
                socket["nickname"] = message.payload;
        }

        
    });
});
//"on" method waits "connection" to happens
//on also recieves func called when connection happens
//on gives info about connection through socket. <- is connection

server.listen(3000, handleListen);



*/
