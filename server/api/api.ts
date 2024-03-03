// metodo para iniciar sempre que for dado o start na aplicação
//importando as libs nescessárias para o método funcionar
import express from 'express';
import { Application } from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes';

//criando classe api
class Api { 
    // criando propriedade express do tipo aplication
    public express: Application;  

    //definindo o construtor da classe que fará que a propriedade express da classe receba uma instância de express
    constructor() {
        this.express = express();
        this.middleware(); // invicando o middleware no momento que a classe Api for instanciada
    }

    //criando método middleware que não tem retorno
    //o morgan gera um log para o console em toda a requisição que for feita assim conseguimos acompanhar oque acontece
    middleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded( { extended:true } ));
        this.express.use(bodyParser.json());
        this.router(this.express); //'this.spress' é nosso objeto  representado por app na assinatura do método router logo abaixo
    }

    //metodo privado que recebe 'Aplication' e retorna uma instância de 'Routes' que depende de 'app'
    //routes precisa do objeto app para poder acessar o modulo de roteador do express
    private router(app: Application): void {
        new Routes(app);
    }

}

// exportando a classe para que ela seja acessível em outros pontos da nossa aplicação
//devolvendo a instância da api, junto com o objeto express
export default new Api().express;




