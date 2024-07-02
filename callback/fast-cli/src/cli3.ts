//Mixed debounce function

import { debounce } from './app';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter text when you want: '
});

console.log(`Debounce test function CLI:

Send a message to call the debounced 5 sec example function:
(Type 'exit' to quit)
`);

// Función de ejemplo para usar con debounce
function exampleFunction(text: string) {
    console.log(`Example function called with: ${text}`);
    waiting = false;  // Restablece la bandera una vez que la función se ha ejecutado
    rl.prompt() // Llamar al prompt una vez ejecutada la función
}

// Inicializa la bandera como falsa
let waiting = false;

const debouncedFunc = debounce((input: string) => {
    exampleFunction(input);
}, 5000);

const startCLI = () => {
    rl.prompt();

    rl.on('line', (input) => {
        if (input.trim().toLowerCase() === 'exit') {
            rl.close();
            return;
        }
        if(input){
           // Comprueba si la función debounced está esperando a ser ejecutada
        if (waiting) {
            console.log('Please wait for the current function call to complete.');
        } else {
            waiting = true;
            debouncedFunc(input);
        } 
        }
    }).on('close', () => {
        console.log('CLI closed.');
        process.exit(0);
    });
};

startCLI();
