// suma.test.js
const suma = require('./suma');

test('suma de 1 y 2 debe ser 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('suma de -1 y 1 debe ser 0', () => {
    expect(suma(-1, 1)).toBe(0);
});

test('suma de 0 y 0 debe ser 0', () => {
    expect(suma(0, 0)).toBe(0);
});