//Escrevendo teste de integração

import { error } from 'console';
import { app, request, expect } from './config/helpers';

//criando testes de integração
describe('Teste de Integração', () => {

    describe('GET /', () => {
        it('Deve retornar a mensagem Hello, world!', done => {
            request(app)
            .get('/')
            .end((error, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.be.eql('Hello, world!');
                done(error);
            });
        });
    });
    
    //se espera que seja retornado como resposta a string nome e o status 200, caso não retorne me mostre a mensagem de erro

    describe('GET /ola/:nome', () => {
        it('Deve retornar a mensagem Hello, TypeScript Course', done => {
            const nome = 'TypeScript Course';
            request(app)
            .get(`/ola/${nome}`)
            .end((error, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.be.eql('Hello, TypeScript Course');
                done(error);
            })
        });
    });

    describe('GET /api/users/all', () => { //recebe todos os nossos usuários
        it('Deve retornar um json com todos os Usuários', done => { //diferente dos testes unitários nossos testes de integração recebe uma função callback done.
            request(app) //fazendo uma requisição para essas rotas, subi a aplicação para responder as requisições
                .get('api/users/all')
                //no final da requisição, recebemos uma função 'error' e resposta do nosso servidor 'res'
                .end((error, res) => {
                    expect(res.status).to.equal(200); //o status da requisição tem que ser igual a 200
                })
        });
    });
    describe('GET /api/users/:id', () => {
        it('Deve retornar um json com apenas um Usuário', done => {
            request(app)
                .get(`api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                })
        });
    });
    describe('POST /api/users/new', () => {
        it('Deve criar um novo Usuário', done => {
            const user = {  //criando um objeto para ser passado como parâmetro de teste
                nome: 'Teste'
            }
            request(app)
                .post('api/users/new')
                .send(user)   //enviar a constante user como teste
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                })
        });
    });
    describe('PUT /api/users/:id/edit', () => {
        it('Deve atualizar um Usuário', done => {
            const user = {
                nome: 'TesteUpdate'
            }
            request(app)
            .put(`/api/users/${1}/edit`)
            .send(user)
            .end((error, res) => {
                expect(res.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/users/:id', () => {
        it('Deve deletar um Usuário', done => {
            request(app)
            .delete(`/api/users/${1}`)
            .end((error, res) => {
                expect(res.status).to.equal(200);
            });
        });
    });

});











