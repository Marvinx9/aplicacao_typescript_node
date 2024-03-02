"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// metodo para iniciar sempre que for dado o start na aplicação
//importando as libs nescessárias para o método funcionar
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
//criando classe api
var Api = /** @class */ (function () {
    //definindo o construtor da classe que fará que a propriedade express da classe receba uma instância de express
    function Api() {
        this.express = express();
        this.middleware(); // invicando o middleware no momento que a classe Api for instanciada
    }
    //criando método middleware que não tem retorno
    //o morgan gera um log para o console em toda a requisição que for feita assim conseguimos acompanhar oque acontece
    Api.prototype.middleware = function () {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.router(this.express); //'this.spress' é nosso objeto  representado por app na assinatura do método router logo abaixo
    };
    //metodo privado que recebe 'Aplication' e retorna uma instância de 'Routes' que depende de 'app'
    //routes precisa do objeto app para poder acessar o modulo de roteador do express
    Api.prototype.router = function (app) {
        new routes_1.default(app);
    };
    return Api;
}());
// exportando a classe para que ela seja acessível em outros pontos da nossa aplicação
//devolvendo a instância da api, junto com o objeto express
exports.default = new Api().express;
