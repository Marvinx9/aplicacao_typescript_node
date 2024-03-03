import * as http from 'http'; //importando http de node_modules
import Api from './api/api';

//trazendo o modulo config
const config = require('./config/env/config')(); //O () já executa a função de imediato, retorna o módulo exports

//passar o objeto da nossa 'api' para o 'server' para que ele fique atrelado a nossa classe principal fazendo eles conversarem juntos
const server = http.createServer(Api);  //criando o servidor http e atribuindo à const 'server'

server.listen(config.serverPort); //falando para o servidor que ele precisa responder as requisições que são feitas.
//capturando os eventos
//se o evento for do tipo lintening, retorna a mensagem que está rodando na porta 'config.serverPort'
server.on('listening', () => console.log(`Servidor está rodando na porta ${config.serverPort}`));
//capturando os eventos de erro
server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro: ${error}`));
