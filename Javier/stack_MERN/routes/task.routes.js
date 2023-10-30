///Operaciones entre servidor - pagina web y viceversa (CRUD) 
//No para crear un servidor sino rutas
const express = require('express');
//gracias a esta linea puedo definir rurtas para el server
const router = express.Router();

///Atraves de este modelo se hacen consultas a la base de datos
const Task = require('../models/task');
///método get
///'/' ruta inicial del servidor 
///'res' responde con algo, en este caso hello
router.get('/', async (req, res) =>{
    ///podemos obtener un error o los documentos
    ///localhost:3000/api/tasks

    ///Cambió en la version 5.0.0
    // task.find(function (err, tasks){
        
    //     console.log(tasks);
    // });

    /// ahora es con try catch y arroja el arreglo vacío
    //codigo asincrono se ejecuta antes de que termina de hacer otra consulta
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);

    // task.find({})
    //     .then(tasks => console.log(tasks),
        
    //         res.json({

    //         status: 'Hello'
        
    //         })

    //     )
    //     .catch(err => console.error(err));
});
///Instalar postmanDesktop para poder verificar funcionamiento
//content-type application/json
//body raw y el documento a enviar en el campo de texto de postman
//Como respuesta mensaje de recibido
router.post('/', async (req, res) =>{

    const {title, description} = req.body;

    //crea un nuevo objeto, un nuevo modelo de tarea que se almacena en mongo db
    const task = new Task({title, description});

    //para almacenarlo
    await task.save();

    console.log(req.body);
    ///para ver que ha terminado la peticion
    res.json('Recibido');

});
///Actualizar
router.put('/:id', async (req, res)=>{

    const {title, description} = req.body;
    const newTask = {title, description};

    ///Gracias a esta linea obtenemos el id del documento de mongodb, sin datos
    console.log(req.params.id);
    ///Actualiza con newTask
    Task.findByIdAndUpdate(req.params.id, newTask);

    res.json('Actualizada');

});

module.exports = router;