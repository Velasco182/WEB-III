import {z} from 'zod';

export const registerSchema = z.object({

    username: z.string({ required_error: 'User name required'}), 
    email: z.string({ required_error: 'Email required'}).email({ message: 'Invalid email'}), 
    password: z.string({ required_error: 'Password required'}).min(6, {message: 'Password must be at least 6 characters'})

});

export const loginSchema = z.object({

    username: z.string({ required_error: 'Username required'}),
    password: z.string({ required_error: 'Password required'}).min(6, {message: 'Password must be at least 6 characters'})

});