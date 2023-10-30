/**
* Generated by MongoDB Relational Migrator 
* https://www.mongodb.com/products/relational-migrator 
* Collection: alertasAvisos
* Language: JavaScript
* Template: Mongoose
* Generated on 18/10/23

*/
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

export const alertasAvisos_Mongoose = new Schema({
    "_id": mongoose.ObjectId,
    "tipoAlertaAviso": String,
    "ultimaUbicacion": Object,
    "mensajeAlertaAviso": String,
    "vozAlertaAviso": Buffer,
}, { collection: "alertasAvisos" })

export const alertasAvisos_MongooseModel = model("alertasAvisos_Mongoose", alertasAvisos_Mongoose);