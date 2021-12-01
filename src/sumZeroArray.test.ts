import {sumZeroCheck} from './sumZeroArray';

test('sum zero checker works', () => {
    expect(sumZeroCheck([4, 2, -3, 1, 4])).toBe(true);
});

test('sum zero checker works', () => {
    expect(sumZeroCheck([4, 2, 3, 1, 4])).toBe(false);
});
