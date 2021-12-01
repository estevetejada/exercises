export function collatz(n: number): number {
    if (n < 1) {
        return 0;
    }
    let cycleLength = 1;
    while (n !== 1) {
        if (n % 2 === 1) {
            n = 3 * n + 1;
        } else {
            n = n / 2;
        }
        cycleLength++;
    }
    return cycleLength;
}
