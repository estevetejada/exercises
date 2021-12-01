import {hexaedro} from './hexaedro';

test('calcula interseccion y volumen total', () => {
    expect(hexaedro()).toStrictEqual([0, 2]);
});
