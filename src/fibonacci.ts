const fibNumbers = [0, 1];

export function fibonacci(n: number): number {
    if (fibNumbers[n] !== undefined) {
        return fibNumbers[n];
    }
    let i = 2;
    while (i <= n) {
        fibNumbers[2] = fibNumbers[1] + fibNumbers[0];
        fibNumbers.shift();
        i++;
    }
    return fibNumbers[1];
}

