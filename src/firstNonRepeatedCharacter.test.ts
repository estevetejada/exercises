import {checkNonRepeatedCharacter} from './firstNonRepeatedCharacter';

test('test short string', () => {
    expect(checkNonRepeatedCharacter('BACA')).toBe('B');
});

test('test short string', () => {
    expect(checkNonRepeatedCharacter('BCABAC')).toBe(null);
});

test('test short string', () => {
    expect(checkNonRepeatedCharacter('BAC')).toBe('B');
});

test('test short string', () => {
    expect(checkNonRepeatedCharacter('GlovoOnGlovo')).toBe('O');
});

test('test short string', () => {
    expect(
        checkNonRepeatedCharacter('What is the first non-repeated character?'))
        .toBe('W');
});
