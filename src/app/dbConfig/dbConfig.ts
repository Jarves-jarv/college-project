import mongoose, { Mongoose } from "mongoose";

export async function  connect() {

    try{
         Mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.Collection;

        connection.on('connected',() =>{
            console.log('MongoDB connected successfully');
        })
        connection.on('error', (err) =>{
            console.log('MongoDB connection error. Please make sure MongoDB is running.'+ err);
            process.exit();
        })

    } catch (error){
        console.log('Something goes wrong!');
        console.log(error);
    }

}