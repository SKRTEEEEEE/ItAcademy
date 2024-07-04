const baseURL = 'http://localhost:4001';

// document.getElementById('fetchButton').addEventListener('click', async () => {
//   try {
//     const response = await fetch(`${baseURL}/pokemon`);
//     const data = await response.json();

//     document.getElementById('pokemonList').innerHTML = `
//       <p>Showing Pokémon from ${data.from} to ${data.to}</p>
//       <ul>
//         ${data.data.map(pokemon => `<li>${pokemon.name}</li>`).join('')}
//       </ul>
//     `;
//   } catch (error) {
//     console.error('Error fetching Pokémon data:', error);
//   }
// });
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');
let defaultCount = 0;
let debounceCount = 0;
let throttleCount = 0;

const incrementCount = (element, count) =>{
  element.textContent = count;
}

const fetchCount = (url, element) =>{
  fetch(url)
    .then(response => response.json())
    .then(data => {
      incrementCount(element, data.count);
    })
    .catch(error => console.error('Error fetching count:', error));
}

const updateDefaultText = ()=>{
  defaultCount++;
  incrementCount(defaultText, defaultCount);
} 

const updateDebounceText = ()=>{
  fetchCount(`/debounce`, debounceText);
}

const updateThrottleText = ()=>{
  fetchCount(`${baseURL}/throttle`, throttleText);
} 

// Button click event
document.getElementById('incrementButton').addEventListener('click', () => {
  updateDefaultText();
  updateDebounceText();
  updateThrottleText();
});