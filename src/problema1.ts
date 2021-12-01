import {collatz} from './collatz';

export function problema1(a: number, b: number) {
    if (a > b) {
        const temp = a;
        a = b;
        b = temp;
    }
    let maxCycle = 0;
    let i = a;

    while (i <= b) {
        maxCycle = Math.max(maxCycle, collatz(i));
        i++;
    }
    return maxCycle;
}


