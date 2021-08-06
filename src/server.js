import http from "http";
import WebSocket from "ws";

import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res)=>res.redirect("/"));


const handleListen = () => console.log(`Listening on http://localhost:3000`);


const server = http.createServer(app);
const wss = new WebSocket.Server({server});
//starting http and websocket in same server
//two protocols, http and ws.

function handleConnection(socket){
    console.log(socket)
}
//"on" method waits "connection" to happens
//on also recieves func called when connection happens
//on gives info about connection through socket. <- is connection
wss.on("connection", handleConnection);

server.listen(3000, handleListen);


//app.listen(3000);