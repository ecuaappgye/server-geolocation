const socketIo = require('socket.io')

let socket

const connection = function({serverConnection}){
    const io = socketIo(serverConnection, {
        cors:{
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true,
        }
    })

    io.on('connection', (client)=>{
        
    })
}

const getSocketConnection=()=>{
    return socket
}

module.exports = {connection, getSocketConnection}