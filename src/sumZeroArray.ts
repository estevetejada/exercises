export function sumZeroCheck(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        let sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            if (sum === arr[i]) {
                return true;
            }
        }
    }
    if (arr[arr.length - 1] === 0) {
        return true;
    }
    return false;
}
