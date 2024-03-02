import { Request, Response, ErrorRequestHandler, NextFunction } from "express";

//criar a função de errorhanddler
// a função recebe o erro, e retorna a mensagem de erro
// adicionando as devidas propriedades
export function errorHanddlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    console.error(`API error handdler foi executada: ${err}`);
    // para quem for receber o erro no navegador irá receber o erro 500
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Erro interno do servidor'
    });
}






