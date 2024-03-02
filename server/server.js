"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http"); //importando http de node_modules
var api_1 = require("./api/api");
var errorHandlerApi_1 = require("./api/errorHandlerApi");
//trazendo o modulo config
var config = require('./config/env/config')(); //O () já executa a função de imediato, retorna o módulo exports
//passar o objeto da nossa 'api' para o 'server' para que ele fique atrelado a nossa classe principal fazendo eles conversarem juntos
var server = http.createServer(api_1.default); //criando o servidor http e atribuindo à const 'server'
//colocar o errorHandler em comunicação com o noso servidor para ele interceptar eventuais problemas na requisição
api_1.default.use(errorHandlerApi_1.errorHanddlerApi);
server.listen(config.serverPort, function () { return console.log('Server está rodando na porta 3000'); }); //falando para o servidor que ele precisa responder as requisições que são feitas, porta padrão de requisição:3000, função de calback para obter um retorno quando chamada
