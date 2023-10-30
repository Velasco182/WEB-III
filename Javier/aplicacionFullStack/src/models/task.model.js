import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({

    title: {type: String, require: true},
    description: {type: String, require: true},
    date: {type: String, require: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true}

},{
    timestamps :true //para agregar fecha de creacion y actualizacion automaticamente
});

export default mongoose.model('Task', taskSchema);