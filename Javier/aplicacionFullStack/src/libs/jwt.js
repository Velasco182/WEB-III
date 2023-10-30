import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload){

    return new Promise((resolve, reject) => {
        //Se crea el token
        jwt.sign(

        payload,
        TOKEN_SECRET, 

        {

        expiresIn: "1d",

            }, (err, token) => {
                //si hay un error, lo muestra
                if (err)reject(err);
                //sino muestra el token, en esta caso la cookie, que es un string encriptado de toda la informacion ingresada por el usuario, username, password y email.
                resolve(token);
                // res.json({ menssage: "user created successfully" });
            }
        );
    }); 
}

