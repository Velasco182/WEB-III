import { Router } from 'express';
import {login, register, logout, profile} from "../controllers/auth.controller.js"
import { authrequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';

const router = Router();

//http://localhost:4000/api/register response: register
router.post('/register', validateSchema(registerSchema), register);
//http://localhost:4000/api/login response: login
router.post('/login', validateSchema(loginSchema), login);
//http://localhost:4000/api/logout
router.post('/logout', logout);

router.get('/profile', authrequired, profile);


export default router;