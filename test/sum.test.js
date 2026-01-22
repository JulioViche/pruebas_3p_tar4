// Importar la función de suma
const sum = require('../src/sum');

test('suma dos números correctamente', () => {
  expect(sum(2, 3)).toBe(5);
});
