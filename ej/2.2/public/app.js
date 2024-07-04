const baseURL = 'http://localhost:4001';
const incrementCountServer = (element, count) =>{
  element.textContent = count;
}
//Last try
// Ejemplo básico de manejo de clics en un botón para debounce y throttle en el cliente
let defaultFullCount = 0;
const defaultFullText = document.getElementById('default-full');
// const debounceFullText = document.getElementById('debounce-full');
// const throttleFullText = document.getElementById('throttle-full');
const updateDefaultFullText = ()=>{
  defaultFullCount++;
  incrementCountServer(defaultFullText, defaultFullCount);
} 

const debounceClick = debounce(() => {
  fetch('/debounce')  // Ejemplo de solicitud fetch
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Debounce count incremented:', data.count)
      updateDebounceFullText(data.count);
    })
    .catch(error => console.error('Error fetching debounce count:', error));
}, 2000);

const throttleClick = throttle(() => {
  fetch('/throttle')  // Ejemplo de solicitud fetch
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
function updateDebounceFullText(count) {
  const debounceFullText = document.getElementById('debounce-full');
  debounceFullText.textContent = count;
}

function updateThrottleFullText(count) {
  const throttleFullText = document.getElementById('throttle-full');
  throttleFullText.textContent = count;
}
document.getElementById('incrementFullButton').addEventListener('click', () => {
  updateDefaultFullText();
  debounceClick()
  throttleClick()

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
const defaultWrongText = document.getElementById('default-wrong');
const debounceWrongText = document.getElementById('debounce-wrong');
const throttleWrongText = document.getElementById('throttle-wrong');
let defaultWrongCount = 0;
// let debounceCount = 0;
// let throttleCount = 0;



// const fetchCount = (url, element) =>{
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       incrementCountServer(element, data.count);
//     })
//     .catch(error => console.error('Error fetching count:', error));
// }
// Helper to fetch count
const fetchCount = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error('Error fetching count:', error);
  }
};


const updateDefaultWrongText = ()=>{
  defaultWrongCount++;
  incrementCountServer(defaultWrongText, defaultWrongCount);
} 

const updateDebounceWrongText = async()=>{
  const count = await fetchCount('/debounce');
  console.log("count: ", count)
  if (count !== undefined) debounceWrongText.textContent = count;
}

const updateThrottleWrongText = async()=>{
  const count = await fetchCount('/throttle');
  if (count !== undefined) throttleWrongText.textContent = count;

} 

// Button click event
document.getElementById('incrementButton').addEventListener('click', () => {
  updateDefaultWrongText();
  updateDebounceWrongText();
  updateThrottleWrongText();
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
