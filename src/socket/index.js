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
        console.log('Connection with address', client)
    })
}

module.exports = {connection}