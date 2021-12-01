import {fibonacci} from './fibonacci';

test('fibonacci works', () => {
    expect(fibonacci(50)).toBe(12586269025);
});
