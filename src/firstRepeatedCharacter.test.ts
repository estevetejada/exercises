import {findRepeatedCharacter} from './firstRepeatedCharacter';

test('test short string', () => {
    expect(findRepeatedCharacter('ABCBA')).toBe('A');
});

test('test short string', () => {
    expect(findRepeatedCharacter('BCABA')).toBe('B');
});

test('test short string', () => {
    expect(findRepeatedCharacter('glovol')).toBe('l');
});

test('test short string', () => {
    expect(findRepeatedCharacter('ABC')).toBe(null);
});

