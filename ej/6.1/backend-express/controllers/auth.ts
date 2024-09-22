import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { SetEnvError } from '../../core/domain/errors/main';
import { CustomJwtPayload } from '../express';

const secretKey = process.env.JWT_SECRET 
export const authenticateJWT =  (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Obtener el token del encabezado

    if (token) {
        if(!secretKey) throw new SetEnvError("JWT_SECRET")
            try {
                const user = jwt.verify(token, secretKey) as CustomJwtPayload; // Usar as para el tipo
                req.user = user; // Almacenar el usuario en la solicitud
                next();
            } catch (err) {
                return res.sendStatus(403); // Forbidden
            }
    } else {
        res.sendStatus(401); // Unauthorized
    }
};
// export const authorizationAdmin = (req)
