test('PessoaPodeConsumirBebidasAlcoolicas', () => {
	const resultado = podeConsumirBebidasAlcoolicas({ idade: 18 });
	expect(resultado).toBe(true);
});


test('PessoaNaoPodeConsumirBebidasAlcoolicas', () => {
	const resultado = podeConsumirBebidasAlcoolicas({ idade: 17 });
	expect(resultado).toBe(false);
});
