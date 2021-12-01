import {pow} from './pow';

test('test exponentes pares', () => {
    expect(pow(5, 2)).toBe(25);
});

test('test exponentes impares', () => {
    expect(pow(2, 3)).toBe(8);
});

test('test base negativa', () => {
    expect(pow(-2, 3)).toBe(-8);
});

test('test exponente = 0', () => {
    expect(pow(-2, 0)).toBe(1);
});

test('test exponente negativo', () => {
    expect(pow(-2, -1)).toBe(-1);
});
