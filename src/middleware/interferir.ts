import { RequestHandler } from "express";

export const interferir: RequestHandler = (req, res, next) => {
    let loguin = true 

    if (loguin) {
        next()
        
    }else {
        res.status(403).json({ error: 'usuario nao está logado'})
    }

    
}