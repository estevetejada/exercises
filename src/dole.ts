export function dole(n: number, k: number, m: number): Array<number> {
    const applicants = [];
    const result = [];
    for (let i = 0; i < n; i++) {
        applicants[i] = i + 1;
    }

    let pos1 = 0;
    let pos2 = n - 1;
    while (applicants.length > 1) {
        pos1 = pos1 + k - 1;
        while (pos1 >= applicants.length) {
            pos1 -= applicants.length;
        }
        pos2 = pos2 - m + 1;
        while (pos2 < 0) {
            pos2 += applicants.length;
        }
        result.push(applicants[pos1]);
        result.push(applicants[pos2]);
        applicants.splice(pos1, 1);
        if (pos1 < pos2) {
            pos2--;
        }
        applicants.splice(pos2, 1);
        if (pos2 < pos1) {
            pos1--;
        }
        pos2--;
    }
    if (applicants.length === 1) {
        result.push(applicants[0]);
    }
    return result;
}
