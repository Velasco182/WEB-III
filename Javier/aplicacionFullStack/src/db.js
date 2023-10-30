import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/mern-db';

//Funcion que permite de forma asincrona conectar a la DB
export const connectDB = async () =>{

    try {

        await mongoose.connect(uri);
        console.log("DB Connect");

    } catch (error) {

        console.log(error);
        
    }
}
