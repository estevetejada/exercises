export class LRUCache {
    capacity: number;
    map: Map <number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key: number) :number {
        if (this.map.has(key)) {
            const v = this.map.get(key);
            this.map.delete(key);
            if (v) {
                this.map.set(key, v);
                return v;
            }
        }
        return -1;
    }

    put(key: number, value: number): number {
        let deleted: number = 0;
        if (!(this.map.size < this.capacity)) {
            deleted = this.map.keys().next().value;
            this.map.delete(this.map.keys().next().value);
        }
        this.map.set(key, value);
        return deleted;
    }
}
