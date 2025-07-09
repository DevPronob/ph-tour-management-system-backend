import {Server} from 'http'
import mongoose from 'mongoose';
import app from './app';
import { envCon } from './app/config';
let server:Server;

const startServer=async() =>{
    try {
        await mongoose.connect(envCon.DB_URL)
       server= app.listen(envCon.PORT,() =>{
        console.log("Server is listening on port 5000")
       })
    } catch (error) {
    
        console.log(error)
    }
}



process.on("unhandledRejection", (err:any) => {
    console.log("Unhandled Rejecttion detected... Server shutting down..", err);

    if (server) {
        server.close(() => {
            process.exit(1)
        });
    }

    process.exit(1)
})

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception detected... Server shutting down..", err);

    if (server) {
        server.close(() => {
            process.exit(1)
        });
    }

    process.exit(1)
})
startServer()