import { app, request, expect } from './config/helpers';

describe('Teste de Integração', () => {
  describe('GET /', () => {
    it('Deve retornar a mensagem Hello, world!', (done) => {
      request(app)
        .get('/')
        .end((error, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.be.eql('Hello, world!');
          done(error);
        });
    });
  });

  describe('GET /ola/:nome', () => {
    it('Deve retornar a mensagem Hello, TypeScript Course', (done) => {
      const nome = 'TypeScript Course';
      request(app)
        .get(`/ola/${nome}`)
        .end((error, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.be.eql('Hello, TypeScript Course');
          done(error);
        });
    });
  });

  describe('GET /api/users/all', () => {
    it('Deve retornar um json com todos os Usuários', () => {
      request(app)
        .get('api/users/all')
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
    describe('GET /api/users/:id', () => {
      it('Deve retornar um json com apenas um Usuário', () => {
        request(app)
          .get(`api/users/${1}`)
          .end((error, res) => {
            expect(res.status).to.equal(200);
          });
      });
    });
    describe('POST /api/users/new', () => {
      it('Deve criar um novo Usuário', () => {
        const user = {
          nome: 'Teste',
        };
        request(app)
          .post('api/users/new')
          .send(user)
          .end((error, res) => {
            expect(res.status).to.equal(200);
          });
      });
    });
    describe('PUT /api/users/:id/edit', () => {
      it('Deve atualizar um Usuário', () => {
        const user = {
          nome: 'TesteUpdate',
        };
        request(app)
          .put(`/api/users/${1}/edit`)
          .send(user)
          .end((error, res) => {
            expect(res.status).to.equal(200);
          });
      });
    });
    describe('DELETE /api/users/:id', () => {
      it('Deve deletar um Usuário', () => {
        request(app)
          .delete(`/api/users/${1}`)
          .end((error, res) => {
            expect(res.status).to.equal(200);
          });
      });
    });
  });
});
