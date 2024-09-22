import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            user?: { id: number; /* otros campos que necesites */ };
        }
    }
}


interface CustomJwtPayload extends JwtPayload {
    id: number; // Asegúrate de que el tipo coincida
    // Agrega otros campos si es necesario
}