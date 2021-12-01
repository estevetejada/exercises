import {problema1} from './problema1';

test('de 1 a 10 es 20', () => {
    expect(problema1(1, 10)).toBe(20);
});

test('de 10 a 1 es 20', () => {
    expect(problema1(10, 1)).toBe(20);
});

test('de 900 a 1000 es 174', () => {
    expect(problema1(900, 1000)).toBe(174);
});

test('de 10 a 10 es 7', () => {
    expect(problema1(10, 10)).toBe(7);
});

test('de -20 a 2 es 7', () => {
    expect(problema1(10, 10)).toBe(7);
});
