export function pow(x: number, n: number): number {
    if (x === 0) {
        return 0;
    }
    if (n < 0) {
        return -1;
    }
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }
    if (n === 2) {
        return x * x;
    }
    if (n % 2 === 1) {
        return pow(pow(x, (n - 1) / 2), 2) * x;
    }
    return pow(pow(x, n / 2), 2);
}
