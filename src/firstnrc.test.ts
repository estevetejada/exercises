import {firstnrc} from './firstnrc';

test('find first non repeated character', () => {
    expect(firstnrc('aabbcdd')).toBe('c');
});

test('there is no repeated character', () => {
    expect(firstnrc('aabbccdd')).toBe('');
});

test('empty string', () => {
    expect(firstnrc('')).toBe('');
});
