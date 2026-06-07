const request = require('supertest');
const app = require('./app');

describe('Teste da rota /saudacao', () => {

	it('Deve retornar uma mensagem de saudação', async () => {
		const resposta = await request(app).get('/saudacao?nome=João');
		expect(resposta.status).toBe(200);
		expect(resposta.body.mensagem).toBe('Olá, João! Bem-vindo à nossa API!');
	});
});