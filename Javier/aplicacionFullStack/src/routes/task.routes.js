import {Router} from 'express';
import { authrequired } from '../middlewares/validateToken.js';
import {getTasks, createTasks, getTask, updateTask, deleteTasks} from '../controllers/tasks.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createTaskSchema } from '../schemas/task.schemas.js';

const router = Router();

///CRUD
//obtener
router.get('/tasks', authrequired, getTasks);
//obtener uno solo
router.get('/tasks/:id', authrequired, getTask);
//crear
router.post('/tasks', authrequired, validateSchema(createTaskSchema), createTasks);
//Eliminar uno solo
router.delete('/tasks/:id', authrequired, deleteTasks);
//actaulizar uno solo
router.put('/tasks/:id', authrequired, updateTask);

export default router;