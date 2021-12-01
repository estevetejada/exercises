export function minimumSwaps(arr: number[]): number {
    let swapCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let minValue = i + 1;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minValue]) {
                minValue = j;
            }
        }
        if (minValue === i) {
            return swapCount;
        } else {
            const temp = arr[minValue];
            arr[minValue] = arr[i];
            arr[i] = temp;
            swapCount++;
        }
    }

    return swapCount;
}
