// módulo que vai exportar um objeto no json com as informações pertinentes ao nosso projeto
module.exports = {
    env: 'development',
    db: 'ts-api',
    dialect: 'postgres',
    username: 'postgres',
    password: 'admin',
    host: 'localhost',
    serverPort: 3000,
    pgPort: 5432,
    dbURL: 'postgres://postgres:pgroot@localhost:5432/ts-api',
    secret: 'S3cr3t',
};
