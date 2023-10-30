import express from "express";
import cors  from 'cors';
import connectDB from './base/miBase.js';
import apdzRoutes from "./rutas/miRuta.routes.js";

const app = express();

app.use(cors());
app.use(express.json());


try {
    await connectDB.authenticate();
    console.log('DB is connect');

} catch (error) {

    console.log("DB isn't connect");
    
}

app.listen(8000, ()=>{

    console.log('Puerto 8000');

});

app.use('/aprendiz', apdzRoutes);
