import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
/// Se necesitan los 3 parametros para considerarse un middleware
// Información de la peticion (req), metodos para enviar en una respuesta (res), en lugar de retornar una respuesta al cliente directamente, se evalúa otra función en este caso si existe un token generado (next)
export const authrequired = (req, res, next) =>{
    //guarda el header del usuario seleccionado en la peticion profile, especificamente el campo cookie, cuando ya se ha hecho el metodo post con login (req.headers.cookie)
    const {token} = req.cookies;
    
    if(!token) return res.status(401).json({message: "No token, authorization denied"});

    //validar token existente y desencriptar datos, id, iat y exp
    jwt.verify(token, TOKEN_SECRET, (err, user)=>{
        if(err) return res.status(403).json({message: "Invalid token"});

        //del usuario decodificado se guarda todos lo datos del token en req.user
        req.user = user;
        
        next();
    });
}