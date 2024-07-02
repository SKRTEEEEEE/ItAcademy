import { debounce } from './app';
import readline from "readline"

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "\nEnter text: "
})
console.log(
`Debounce test function CLI:

Send a message for call the debounced 1 sec example function:
`)


// Función de ejemplo para usar con debounce
function exampleFunction(text: string) {
  console.log(`\nExample function called with: ${text}`);
}

const debouncedFunc = debounce(exampleFunction, 1000);

// const startCLI = () => {
//     rl.question("Enter text: ", (input)=> {
//         debouncedFunc(input)
//         startCLI();
//     })
// }

const startCLI = () => {
    rl.prompt();
    rl.on('line', (input) => {
        if(input === 'exit') {
            rl.close();
            return;
        }
        debouncedFunc(input);
        rl.prompt();
    }).on('close', () => {
        console.log('Exiting...');
        process.exit(0);
    });
}

startCLI();
