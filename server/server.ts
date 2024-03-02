import * as http from 'http'; //importando http de node_modules
import Api from './api/api';
import { errorHanddlerApi } from './api/errorHandlerApi';

//trazendo o modulo config
const config = require('./config/env/config')(); //O () já executa a função de imediato, retorna o módulo exports

//passar o objeto da nossa 'api' para o 'server' para que ele fique atrelado a nossa classe principal fazendo eles conversarem juntos
const server = http.createServer(Api);  //criando o servidor http e atribuindo à const 'server'

//colocar o errorHandler em comunicação com o noso servidor para ele interceptar eventuais problemas na requisição
Api.use(errorHanddlerApi);


server.listen(config.serverPort, () => console.log('Server está rodando na porta 3000')); //falando para o servidor que ele precisa responder as requisições que são feitas, porta padrão de requisição:3000, função de calback para obter um retorno quando chamada
