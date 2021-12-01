import {collatz} from './collatz';

test('collatz de 10 es 7', () => {
    expect(collatz(10)).toBe(7);
});

test('collatz de -10 peta', () => {
    expect(collatz(-10)).toBe(0);
});
