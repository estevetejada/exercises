import {bubblesort} from './bubblesort';

test('algorithm returns an ordered array', () => {
    expect(bubblesort([0, 2, 7, 9, 4, 6, 5, 8, 3, 1]))
        .toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
