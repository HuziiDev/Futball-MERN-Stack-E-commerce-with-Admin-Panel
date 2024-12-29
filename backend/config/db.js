import mongoose from "mongoose";


export const connectToDb = async ()=>{
    mongoose.connection.on('connected', ()=>{
        console.log("Db connected")
    })
    await mongoose.connect(`${process.env.MONGO_URI}/futball`)
}

