import miDb from "../base/miBase.js";
import { DataTypes } from "sequelize";

///Nombre de la base de la tabla "aprendiz"
const apdzModel = miDb.define('aprendiz', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  nombre_aprendiz: { type: DataTypes.STRING },
  password_aprendiz: { type: DataTypes.STRING },
  email_aprendiz: { type: DataTypes.STRING },
  fecha_creacion: { type: DataTypes.DATE },
  fecha_actualizacion: { type: DataTypes.DATE }
}, {
  tableName: 'aprendiz' // Nombre de la tabla en la base de datos
});

export default apdzModel;