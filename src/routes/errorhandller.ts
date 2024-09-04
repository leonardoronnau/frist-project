import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({error: 'rota do servidor não encontrada'})
}

export const errorHandller: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json({ error :' ocorreu um erro '})
}