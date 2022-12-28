const circle = require('../src/circle');
const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    let firstProduct;
    let secondProduct;
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    // Colaboração de Thais Gonçalves na compreenção do Array.isArray
    expect(Array.isArray(productDetails())).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails.length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(Array.isArray(productDetails('Priscila')[0])).toBeFalsy();
    expect(Array.isArray(productDetails('Priscila')[1])).toBeFalsy();
    expect(typeof (productDetails('Priscila')[0])).toBe('object');
    expect(typeof (productDetails('Priscila')[1])).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Priscila')).not.toEqual(productDetails('Sartori'));
    // Teste se os dois productIds terminam com 123.
    expect(Object.values(productDetails('Priscila'))).toEqual([
      { name: 'Priscila', details: { productId: 'Priscila123' } },
      { name: undefined, details: { productId: 'undefined123' } }
    ]);
  });
});
