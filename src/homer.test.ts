import {homer} from './homer';

test('how much can homer eat', () => {
    expect(homer(3, 5, 54)).toStrictEqual([18, 0]);
});
