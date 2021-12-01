const hex1 = [[0, 0, 0], [1, 1, 1]];
const hex2 = [[2, 2, 2], [3, 3, 3]];

export function hexaedro(): Array<number> {
    const hex = hex1.concat(hex2);

    const x = [];
    const y = [];
    const z = [];

    for (let i = 0; i < hex.length; i++) {
        for (let j = 0; j < hex[i].length; j++) {
            if (j === 0) {
                x.push(hex[i][j]);
            } else if (j === 1) {
                y.push(hex[i][j]);
            } else {
                z.push(hex[i][j]);
            }
        }
    }

    x.sort(); y.sort(); z.sort();

    const volInt = (x[2] - x[1]) * (y[2] - y[1]) * (z[2] - z[1]);
    const volHex1 = (hex1[1][0] - hex1[0][0]) *
        (hex1[1][1] - hex1[0][1]) *
        (hex1[1][2] - hex1[0][2]);
    const volHex2 = (hex2[1][0] - hex2[0][0]) *
        (hex2[1][1] - hex2[0][1]) *
        (hex2[1][2] - hex2[0][2]);

    return [volInt, volHex1 + volHex2 - volInt];
}
