import Task from '../models/task.model.js';

export const getTasks = async (req, res) =>{

    const tasks = await Task.find({
        ///Trae las tareas especificas por id de usuario
        user: req.user.id

    }).populate('user');

    res.json(tasks);

};

export const createTasks = async (req, res) =>{

    const {title, description, date} = req.body;
    
    const newTask = new Task({

        title, description, date, user: req.user.id 

    });

    const saveTask = await newTask.save();
    res.json(saveTask);
};

export const getTask = async (req, res) =>{

    ///Dato de la url que estan pasando
    const task = await Task.findById(req.params.id).populate('user');
    //Si no encuentra la tarea muestra error 404
    if(!task) return res.status(404).json({menssage: "Task not found"});
    //sino muestra la tarea
    res.json(task);

};

export const deleteTasks = async (req, res) =>{

    ///Dato de la url que estan pasando
    const task = await Task.findByIdAndDelete(req.params.id);
    //Si no encuentra la tarea muestra error 404
    if(!task) return res.status(404).json({menssage: "Task not found"});
    //sino muestra la tarea
    return res.sendStatus(204);

};

///moongoose devuelve el dato aterior
{
    title: "tarea 1"
}

export const updateTask = async (req, res) =>{

    ///Dato de la url que estan pasando y además los datos para actualizar la tarea
    ///para mostrar el dato nuevo {new: true}
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    //Si no encuentra la tarea muestra error 404
    if(!task) return res.status(404).json({menssage: "Task not found"});
    //sino muestra la tarea
    res.json(task);

    //1:50:47 https://www.youtube.com/watch?v=NmkY4JgS21A&ab_channel=FaztCode

};