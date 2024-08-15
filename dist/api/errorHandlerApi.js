"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHanddlerApi = errorHanddlerApi;
/* eslint-disable @typescript-eslint/no-unused-vars */
function errorHanddlerApi(err, req, res, next) {
    console.error("API error handdler foi executada: ".concat(err));
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Erro interno do servidor',
    });
}
