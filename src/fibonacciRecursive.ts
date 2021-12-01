export function fibRecursive(a: number): number {
    if (a === 1 || a === 0) {
        return a;
    } else {
        return fibRecursive(a - 1) + fibRecursive(a - 2);
    }
}
