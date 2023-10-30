////Archivo Lanzador del servidor
/// IMPORTANTE TENER INSTALADO NODE.JS
////Me dirijo desde el terminal a la carpeta donde estoy trabajando para crear el un archivo .json por medio del comando npm init --yes
/// Empezar a instalar módulos. 1. Express - npm install express
/// 
const express = require('express');
const app = express(); /// Servidor
const morgan = require('morgan');/// Morgan
const path = require('path');//Modulo Path
const { mongoose } = require('./db');

///Settings
app.set('port', process.env.PORT || 3000);///Toma el puesto que me está dando el servicio de la nube

///Middlewares (Funciones que se ejecutan antes de llegar a la rutas)

///npm install morgan: permite ver las peticiones de los clientes al server atraves de consola o terminal de visual studio code
app.use(morgan('dev'));
///Cada que llega un dato al servfer pasa por esta funcion, para comprobar si es un json, para enviar y recibir elementos ne formato json.
app.use(express.json());

///Routes
app.use('/api/tasks', require('./routes/task.routes'));

//////////Static Files
// console.log(path.join(__dirname, 'public','assets'));
///Parea unix
// console.log(__dirname+'/public/assets')
app.use(express.static(path.join(__dirname, 'public')));
//La carpeta public será enviada al navegador
//Static por defecto la encuentra
//Instalamos un nuevo módulo: path, viene por defecto con node js


///Starting server
app.listen(app.get('port'), ()=>{
    console.log(`server on ${app.get('port')}`);
});

///Para ejecutar el sevidor: node ruta/arhivo.js
//en este caso node stack_MERN/assets/js/index.js
//Respuesta server in 3000 port (Por defecto error, funcionando express que significa qwue no se ha podido obtener nada con el método GET/ desde el server)
//Para cualquier comando diferente a start ponemos antes "run", por ejemplo: en el apartado scripts del package.json puse "dev": "nodemon assets/js/index.js", para tenerlo antes npm install nodemon -D : 
//comando npm run dev. 
//importante iniciar mongo, comando: mongod
///El nodemon sirve para reiniciar el servidor cada que haga un cambio





