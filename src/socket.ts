import { error } from "console";
import { Server, Socket } from "socket.io";

interface customSocket extends Socket{
    room?:string;
}

export function setupSocket(io:Server){

    io.use((socket:customSocket, next)=>{
        const room = socket.handshake.auth.room || socket.handshake.headers.room;
        if(!room){
            return next(new Error("Please Pass Correct Room ID"))
            
        }
        socket.room=room;
        next();
    })

    io.on("connection", (socket:customSocket)=>{
        
        //join the room

        socket.join(socket.room);

        // console.log("The socket connected...", socket.id);

        socket.on("message", (data)=>{
            console.log("server side message", data);


            io.to(socket.room).emit("message", data);
        })

        socket.on("disconnect", ()=>{
            console.log("A user diconnected", socket.id);
            
        })
    })
}