import { Application, Request, Response } from "express";

//criando classe com construtor que recebe uma instância do app express para podermos acessar o sistema de rotas
// atravez do objeto app conseguimos acessar o modulo de rotas do express
class Routes {

    constructor(app: Application) {
        this.getRoutes(app)   //toda vez que a classe Routes for instanciada a função getRoutes vai ser invocada
    }
    
    //função que também recebe a instância do app express e retorna void, ela apenas instancia as rotas no momento da aplicação
    //a função route vai receber o tipo de requisição que vai ser executada, pode ser um req ou res e vai retornar uma mensagem
    // a rota padrão '/' vai retornar o 'Hello, word', a rota '/ola/:nome' vai retornar 'Hello + parâmetro nome do request
    getRoutes(app: Application): void {
        app.route('/').get((req: Request, res:Response) => res.send('Hello, word!'));
        app.route('/ola/:nome').get((req: Request, res: Response) => res.send(`Hello ${req.params.nome}`));
    }

}

//agora vamos exportar a classe para que ela vire um módulo acessível por outros pontos da nossa aplicação

export default Routes;














