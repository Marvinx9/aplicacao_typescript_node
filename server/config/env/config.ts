//modulo exports vai receber uma função que vai retornar uma chamada para o required
//retorna uma variável do sistema
module.exports = () => require(`../env/${ process.env.NODE_ENV }.env.ts`);