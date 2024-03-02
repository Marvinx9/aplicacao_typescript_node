// metodo para iniciar sempre que for dado o start na aplicação
//importando as libs nescessárias para o método funcionar
import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

//criando classe api
class Api { 
    // criando propriedade express do tipo aplication
    public express: Application;  

    //definindo o construtor da classe que fará que a propriedade express da classe receba uma instância de express
    constructor() {
        this.express = express();
    }

    //criando método middleware que não tem retorno
    //o morgan gera um log para o console em toda a requisição que for feita assim conseguimos acompanhar oque acontece
    middleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded( { extended:true } ));
        this.express.use(bodyParser.json());
    }


}

// exportando a classe para que ela seja acessível em outros pontos da nossa aplicação
//devolvendo a instância da api, junto com o objeto express
export default new Api().express;




