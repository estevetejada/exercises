import {LRUCache} from './lrucache';

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);

test('test cache get method', () => {
    expect(cache.get(1)).toBe(1);
});

test('test cache put method', () => {
    expect(cache.put(3, 3)).toBe(2);
});

test('try to get non existent key', () => {
    expect(cache.get(2)).toBe(-1);
});
