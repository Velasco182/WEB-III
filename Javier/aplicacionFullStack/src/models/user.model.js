import mongoose from "mongoose";
//trim para limpiar espacios en blanco

const userSchema = new mongoose.Schema({

    username: {type: String, require: true, trim: true, unique: true},
    email: {type: String, require: true, trim: true, unique: true},
    password: {type: String, require: true}

},{
    timestamps :true //para agregar fecha de creacion y actualizacion automaticamente
});

///Se crea el modelo llamado User con el schema de userSchema, para interactuar con la base de datos
export default mongoose.model('User', userSchema);