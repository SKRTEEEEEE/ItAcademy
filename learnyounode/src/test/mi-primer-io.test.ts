import fs from 'fs';

jest.mock('fs');

describe('mi-primer-io', () => {
    let consoleLogSpy: jest.SpyInstance;
   


    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
   




    test('debería contar y imprimir el número de líneas en el archivo', () => {
        process.argv = ['node', 'dist/mi-primer-io', 'test.txt'];
        (fs.readFileSync as jest.Mock).mockReturnValue('line1\nline2\nline3\n');

        require('../mi-primer-io');

        expect(consoleLogSpy).toHaveBeenCalledWith(3);
    });

});
