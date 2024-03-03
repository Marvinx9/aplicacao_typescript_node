//definindo as configurações do nosso teste

import * as mocha from 'mocha';
import * as Chai from 'chai';
import * as td from 'testdouble';
const supertes = require('supertest');
import App from '../../../server/api/api';  // importando a nossa aplicação
import supertest from 'supertest';

//criando algumas constantes
const app = App;
const request = supertest;
const expect = Chai.expect;
const testDouble = td;

//exportando as constantes

export { app, expect, request, testDouble};







