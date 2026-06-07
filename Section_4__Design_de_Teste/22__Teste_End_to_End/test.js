describe('Teste do fluxo de login', () => {
	it('Deve fazer login e acessar a página protegida', () => {
		cy.visit('/login');
		cy.get('input[name="usuario"]').type('usuario');
		cy.get('input[name="senha"]').type('senha');
		cy.get('button[type="submit"]').click();
		cy.url().should('include', '/pagina-protegida');
		cy.get('h1').should('contain', 'Bem-vindo à página protegida!');
	});
});