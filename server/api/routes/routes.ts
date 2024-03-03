import { Application, Request, Response } from "express";
import UserRoutes from '../../modules/User/routes';

//criando classe com construtor que recebe uma instância do app express para podermos acessar o sistema de rotas
// atravez do objeto app conseguimos acessar o modulo de rotas do express
class Routes {

    constructor(app: Application) {
        this.getRoutes(app)   //toda vez que a classe Routes for instanciada a função getRoutes vai ser invocada
    }
    
    //função que também recebe a instância do app express e retorna void, ela apenas instancia as rotas no momento da aplicação
    //a função route vai receber o tipo de requisição que vai ser executada, pode ser um req ou res e vai retornar uma mensagem
    // a rota padrão '/all' vai retornar todos os usuários que estão disponíveis, a rota '/create' vai criar novos usuários
    getRoutes(app: Application): void {
        app.route('/api/users/all').get(this.router.index);
        app.route('/api/users/create').post(this.router.create);
        app.route('/api/users/:id').get(this.router.findOne);
        app.route('/api/users/:id/update').put(this.router.update);
        app.route('/api/users/:id/destroy').delete(this.router.destroy);
    }

}

//agora vamos exportar a classe para que ela vire um módulo acessível por outros pontos da nossa aplicação

export default Routes;














