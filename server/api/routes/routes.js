"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//criando classe com construtor que recebe uma instância do app express para podermos acessar o sistema de rotas
// atravez do objeto app conseguimos acessar o modulo de rotas do express
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app); //toda vez que a classe Routes for instanciada a função getRoutes vai ser invocada
    }
    //função que também recebe a instância do app express e retorna void, ela apenas instancia as rotas no momento da aplicação
    //a função route vai receber o tipo de requisição que vai ser executada, pode ser um req ou res e vai retornar uma mensagem
    // a rota padrão '/' vai retornar o 'Hello, word', a rota '/ola/:nome' vai retornar 'Hello + parâmetro nome do request
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (req, res) { return res.send('Hello, word!'); });
        app.route('/ola/:nome').get(function (req, res) { return res.send("Hello ".concat(req.params.nome)); });
    };
    return Routes;
}());
//agora vamos exportar a classe para que ela vire um módulo acessível por outros pontos da nossa aplicação
exports.default = Routes;
