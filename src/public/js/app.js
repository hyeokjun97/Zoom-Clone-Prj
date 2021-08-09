
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () =>{
    console.log("connected to server");
});

socket.addEventListener("message", (message)=>{
    console.log("New Message: ", message.data);
});

socket.addEventListener("close", ()=>{
    console.log("Disconnected From Server");
});

setTimeout(()=>{
    socket.send("hello From the Browser!");
}, 10000);