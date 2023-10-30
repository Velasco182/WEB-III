////Modelado de la DB 
const mongoose = require("mongoose");

///propiedades del schema de bd
const {Schema} = mongoose;

///Schema de las tareas, para reutilizarlo en el resto de datos.
const taskSchema = new Schema({

    title: {type: String, required: true},
    description: {type: String, required: true}    

});

///nombre de modelo: 'Task', taskSchema: como van a lucir los datos o estructura. 
module.exports = mongoose.model('Task', taskSchema);