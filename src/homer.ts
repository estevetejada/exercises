export function homer(kTime: number, aTime: number, t: number): Array<number> {
    const fastestBurger = Math.min(kTime, aTime);
    const slowestBurger = Math.max(kTime, aTime);
    let result = [Math.floor(t/fastestBurger), t % fastestBurger];

    if (result[1] === 0) {
        return result;
    }
    for (let i = result[0] - 1; i > 0; i--) {
        let newResult = [i, t - i * fastestBurger];
        if (newResult[1] % slowestBurger === 0) {
            newResult = [
                i + newResult[1] / slowestBurger,
                newResult[1] % slowestBurger,
            ];
            if (newResult[1] < result[1]) {
                result = newResult;
            }
        }
    }
    return result;
}
