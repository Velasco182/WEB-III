///Relacionado con el auth.routes.js
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import {createAccessToken} from '../libs/jwt.js';

//http://localhost:4000/api/register response: register
export const register = async (req, res) => {

    const {email, password, username} = req.body;

    try {

        ///Encriptar contraseña
        const passwordHash = await bcrypt.hash(password, 10); //string aleatorio

        ///Crear nuevo usuario
        const newUser = new User({

            username,
            email,
            password: passwordHash
    
        });

        ///guardar el usuario
        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id});


        // //Se crea el token
        // jwt.sign({

        //     id: userSaved._id,

        // },
        // "secret123",{

        //     expiresIn: "1d",

        // }, (err, token) => {
        //         //si hay un error, lo muestra
        //         if(err) console.log(err);
        //         //sino muestra el token, 
        //en esta caso la cookie, que es un string encriptado de toda la informacion ingresada por el usuario, username, password y email.
        res.cookie('token', token);
        //         res.json({menssage: "user created successfully"});
        //     }
        // );

        ///Muestra como json la respuesta del documento creado, con id, timestamp, etc
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt

            //Para hacer credeciales o que el front nos indique que ya se ha logueado hacemos tokens
        });
        
    } catch (error) {

        res.status(500).json({mensagge: error.mensagge});
        
    }

    
    
}

//http://localhost:4000/api/login response: login
export const login = async (req, res) => {

    const {password, username} = req.body;

    try {

        //Ver si existe el usuario
        const userFound = await User.findOne({username});

        if(!userFound) return res.status(400).json({mensagge: "User not found"});

        ///Comparar la contraseña
        const isMatch = await bcrypt.compare(password, userFound.password); 

        if(!isMatch) return res.status(400).json({mensagge: "Incorrect password"});

        ///Crear token de usuario encontrado
        const token = await createAccessToken({id: userFound._id});

        //en esta caso la cookie, que es un string encriptado de toda la informacion ingresada por el usuario, username, password y email.
        res.cookie('token', token);

        ///Muestra como json la respuesta del documento creado, con id, timestamp, etc
        res.json({

            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createAt: userFound.createdAt,
            updatedAt: userFound.updatedAt

            //Para hacer credeciales o que el front nos indique que ya se ha logueado hacemos tokens
        });
        
    } catch (error) {

        res.status(500).json({mensagge: error.mensagge});
        
    }

    
    
}

//http://localhost:4000/api/logout response: logout
export const logout = async (req, res) => {

    //en esta caso la cookie se crea con un valor vaciío y con una fecha de expiración
    res.cookie('token', "" , {expires: new Date(0)});

    return res.sendStatus(200);
    
}

export const profile = async (req, res) => {
    ///Consulta en la base de datos, muestra todos los datos, extraemos los que necesitamos
    const userFound = await User.findById(req.user.id);

    if(!userFound) return res.status(400).json({message: "User not found"});
    
    ///Muestra como json la respuesta del documento encontrado, con id, timestamp, etc
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createAt: userFound.createdAt,
        updatedAt: userFound.updatedAt

        //Para hacer credeciales o que el front nos indique que ya se ha logueado hacemos tokens
    });
    // res.send('profile')   
}