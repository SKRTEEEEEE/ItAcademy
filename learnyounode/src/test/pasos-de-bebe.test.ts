test('debería imprimir la suma de los números proporcionados', () => {
    console.log = jest.fn();
    process.argv = ['node', 'pasos-de-bebe.ts', '1', '2', '3'];
    require('../pasos-de-bebe.ts');
    expect(console.log).toHaveBeenCalledWith(6);
});