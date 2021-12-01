import {checkParenthesis} from './validParenthesis';

test('çheck valid chain', () => {
    expect(checkParenthesis('()')).toBe(true);
});

test('çheck valid chain', () => {
    expect(checkParenthesis('()[]{}')).toBe(true);
});

test('çheck valid chain', () => {
    expect(checkParenthesis('(]')).toBe(false);
});

test('çheck valid chain', () => {
    expect(checkParenthesis(')(')).toBe(false);
});

test('çheck valid chain', () => {
    expect(checkParenthesis('([)]')).toBe(false);
});

test('çheck valid chain', () => {
    expect(checkParenthesis('([])')).toBe(true);
});

test('çheck valid chain', () => {
    expect(checkParenthesis(')')).toBe(false);
});

test('çheck valid chain', () => {
    expect(checkParenthesis('([]')).toBe(false);
});

test('çheck valid chain', () => {
    expect(checkParenthesis('{')).toBe(false);
});

test('çheck valid chain', () => {
    expect(checkParenthesis('([)])')).toBe(false);
});

test('çheck valid chain', () => {
    expect(checkParenthesis('(((((((((())))))))))')).toBe(true);
});

test('çheck valid chain', () => {
    expect(checkParenthesis('')).toBe(true);
});
