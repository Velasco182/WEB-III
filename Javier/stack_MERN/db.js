///Archivo que permite conectar la DB
//instalamos un modulo mas, npm install mongoose .... Nos permite conectarnos a la base da datos y modelarla

const mongoose = require('mongoose');

//No funcionaba con la linea por defecto mongodb://localhost/mern-tasks, se cambió a
//además crea la base de datos mern-tasks en mongo, si es que no está creada
const uri = 'mongodb://127.0.0.1:27017/mern-tasks';

mongoose.connect(uri)
    .then(db => console.log('db is connect'))
    .catch(err => console.log(err), 
    ///También agrgué esto
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

//exportamos el módulo
module.exports = mongoose;   