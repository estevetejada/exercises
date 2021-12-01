import {anagramCheck} from './anagram';

test('anagramCheck works', () => {
    expect(anagramCheck([
        'monk', 'konm', 'bbc', 'cbb', 'oknm', 'dell', 'ledl', 'cualquier cosa',
    ])).toStrictEqual(
        [
            ['monk', 'konm', 'oknm'],
            ['bbc', 'cbb'],
            ['dell', 'ledl'],
            ['cualquier cosa'],
        ],
    );
});
