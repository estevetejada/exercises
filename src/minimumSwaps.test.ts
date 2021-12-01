import {minimumSwaps} from './minimumSwaps';

test('minimum swap works', () => {
    expect(minimumSwaps([9, 4, 2, 1])).toBe(2);
});

test('empty array', () => {
    expect(minimumSwaps([])).toBe(0);
});

test('ordered array', () => {
    expect(minimumSwaps([1, 2, 3, 4])).toBe(0);
});

test('worst case scenario', () => {
    expect(minimumSwaps([9, 7, 5, 3, 1, 2, 4, 6, 8, 10])).toBe(8);
});
