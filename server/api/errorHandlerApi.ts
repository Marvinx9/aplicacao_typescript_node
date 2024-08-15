import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

/* eslint-disable @typescript-eslint/no-unused-vars */
export function errorHanddlerApi(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(`API error handdler foi executada: ${err}`);

  res.status(500).json({
    errorCode: 'ERR-001',
    message: 'Erro interno do servidor',
  });
}
