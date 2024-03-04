"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHanddlerApi = void 0;
//criar a função de errorhanddler
// a função recebe o erro, e retorna a mensagem de erro
// adicionando as devidas propriedades
function errorHanddlerApi(err, req, res, next) {
    console.error("API error handdler foi executada: ".concat(err));
    // para quem for receber o erro no navegador irá receber o erro 500
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Erro interno do servidor'
    });
}
exports.errorHanddlerApi = errorHanddlerApi;


