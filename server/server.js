"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http"); //importando http de node_modules
var server = http.createServer(); //criando o servidor http e atribuindo à const 'server'
server.listen(3000, function () { return console.log('Server está rodando na porta 3000'); }); //falando para o servidor que ele precisa responder as requisições que são feitas, porta padrão de requisição:3000, função de calback para obter um retorno quando chamada
