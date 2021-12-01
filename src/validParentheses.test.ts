import {validParentheses} from './validParentheses';

test('testing valid chain', () => {
    expect(validParentheses('456(123)(32(855)1(112))')).toBe(true);
});

test('testing wrong chain', () => {
    expect(validParentheses('())(()())')).toBe(false);
});

test('testing not parentheses', () => {
    expect(validParentheses('[()654((3211)())]')).toBe(true);
});

test('empty test', () => {
    expect(validParentheses('')).toBe(true);
});

