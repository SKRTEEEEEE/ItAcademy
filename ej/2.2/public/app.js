const baseURL = 'http://localhost:4001';
const incrementCountServer = (element, count) =>{
  element.textContent = count;
}
const useDebounce = (fn, path, time) =>{
  return debounce(()=>{
    fetch(path)
      .then(response => response.json())
      .then(data => {
        fn(data.count);
      })
      .catch(error => console.error('Error fetching count:', error));
  },time)
}
//Last try
// Ejemplo básico de manejo de clics en un botón para debounce y throttle en el cliente

const defaultFullText = document.getElementById('default-full');
let defaultFullCount = 0;


const updateDefaultFullText = ()=>{
  // defaultWrongCount++;
  defaultFullCount++;
  // incrementCountServer(defaultWrongText, defaultWrongCount);
  incrementCountServer(defaultFullText, defaultFullCount);
} 
//Cheat

function updateDebounceFullText(count) {
  const debounceFullText = document.getElementById('debounce-full');
  debounceFullText.textContent = count;
  // debounceWrongText.textContent = count;
}

function updateThrottleFullText(count) {
  const throttleFullText = document.getElementById('throttle-full');
  throttleFullText.textContent = count;
  // throttleWrongText.textContent = count;
}





// const debounceClickFull = debounce(() => {
//   fetch('/debounce-full')  
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Debounce count incremented:', data.count)
//       updateDebounceFullText(data.count);
//     })
//     .catch(error => console.error('Error fetching debounce count:', error));
// }, 2000);
const debounceClickFull = useDebounce(updateDebounceFullText,'/debounce-full', 2000);
const throttleClickFull = throttle(() => {
  fetch('/throttle-full')  
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Throttle count incremented:', data.count)
      updateThrottleFullText(data.count);
    })
    .catch(error => console.error('Error fetching throttle count:', error));
}, 2000);

document.getElementById('incrementFullButton').addEventListener('click', () => {
  updateDefaultFullText();
  debounceClickFull()
  throttleClickFull()

});


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
const defaultMixedText = document.getElementById('default-wrong');
const debounceMixedText = document.getElementById('debounce-wrong');
const throttleMixedText = document.getElementById('throttle-wrong');
let defaultMixedCount = 0;



// Esto te llevara al infierno 👽🔫
// const fetchCount = (url, element) =>{
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       incrementCountServer(element, data.count);
//     })
//     .catch(error => console.error('Error fetching count:', error));
// }
// Helper to fetch count
// const fetchCount = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.count;
//   } catch (error) {
//     console.error('Error fetching count:', error);
//   }
// };


const updateDefaultMixedText = ()=>{
  defaultMixedCount++;
  incrementCountServer(defaultMixedText, defaultMixedCount);
} 

// const updateDebounceWrongText = (count) => {
//   debounceWrongText.textContent = count;
// } 


const debounceClickMixed = useDebounce((count)=>debounceMixedText.textContent = count, '/debounce-wrong',200);
const throttleClickMixed = useDebounce((count)=>throttleMixedText.textContent = count, '/throttle-wrong',200);

// const updateDebounceWrongText = async()=>{
//   const count = await fetchCount('/debounce');
//   console.log("count: ", count)
//   if (count !== undefined) debounceWrongText.textContent = count;
// }

// const updateThrottleWrongText = async()=>{
//   const count = await fetchCount('/throttle');
//   if (count !== undefined) throttleWrongText.textContent = count;

// } 



// Button click event
document.getElementById('incrementWrongButton').addEventListener('click', () => {
  updateDefaultMixedText();

  debounceClickMixed()
  throttleClickMixed()
  });



// Client JavaScript (app.js)
const defaultClientText = document.getElementById("default-client");
const debounceClientText = document.getElementById("debounce-client");
const throttleClientText = document.getElementById("throttle-client");

const updateDebounceText = debounce(() => {
  incrementCount(debounceClientText);
});
const updateThrottleText = throttle(() => {
  incrementCount(throttleClientText);
}); // Adjust throttle delay if needed

document.getElementById('incrementButtonClient').addEventListener('click', () => {
  incrementCount(defaultClientText);
  updateDebounceText();
  updateThrottleText();
});

function debounce(cb, delay = 2000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// function throttle(cb, delay = 2000) {
//   let shouldWait = false;
//   let waitingArgs;
  
//   return (...args) => {
//     if (!shouldWait) {
//       cb(...args);
//       shouldWait = true;
      
//       setTimeout(() => {
//         shouldWait = false;
//         if (waitingArgs) {
//           cb(...waitingArgs);
//           waitingArgs = null;
//         }
//       }, delay);
//     } else {
//       waitingArgs = args;
//     }
//   };
// }
// function throttle(cb, delay = 2000) {
//   let shouldWait = null;

//   return function(...args){
//     if(!shouldWait){
//       cb(...args);
//       // shouldWait = true;
//       setTimeout(() => {
//         shouldWait = false;
//       }, delay);
//     }
//   }
// }
function throttle(func, delay = 2000) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last < delay) return
    last = now;
    return func(...args);
  };
}
function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
