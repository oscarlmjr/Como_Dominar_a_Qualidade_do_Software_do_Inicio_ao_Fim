// test.js
test('Teste da função somar',() => {
    const a = 2;
    const b = 3;
    const resultado = somar(a,b);

    expect(resultado).toBe(5);
})

// const soma = require('./soma');

// test('soma 1 + 2 deve retornar 3',() => {
// 	expect(soma(1,2)).toBe(3);
// });

// import { soma } from './calculadora.js';

// console.log(soma(2, 3)); // Retorna 5
