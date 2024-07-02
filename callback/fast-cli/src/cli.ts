import { debounce } from './app';

// Función de ejemplo para usar con debounce
function exampleFunction(text: string) {
  console.log(`Example function called with: ${text}`);
}

// Función principal para la CLI
function main() {
  const debouncedFunc = debounce(exampleFunction, 1000);

  // Ejemplos de llamadas a la función debounced
  debouncedFunc('First call');
  debouncedFunc('Second call');
  debouncedFunc('Third call');
}

main();
