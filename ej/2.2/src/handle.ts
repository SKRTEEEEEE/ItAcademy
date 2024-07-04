import http from "http"
import { debounceHandler } from "./utils/debounce";
import { throttleHandler } from "./utils/throttle";
// import { fetchPokemonData } from "./app";
// import { debounceHandler } from "./utils/debounce";

// let offset = 0;
// const limit = 10;

// const handleFetch = async (req:http.IncomingMessage, res:http.ServerResponse ) => {
//     try {
//         const data = await fetchPokemonData(offset, limit);
//         const response = {
//           from: offset + 1,
//           to: offset + data.length,
//           data
//         };
//         offset += limit;
  
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(response));
//       } catch (error) {
//         res.writeHead(500, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ error: 'Failed to fetch Pokémon data' }));
//       }
// }

// export const debouncedFetch = debounceHandler(handleFetch, 2000);

let throttleCount = 0;
let debounceCount = 0;

const incrementDebounceCount = (req:http.IncomingMessage,res: http.ServerResponse) =>{
  debounceCount++;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Debounce count incremented', count: debounceCount }));
}

const incrementThrottleCount = (req:http.IncomingMessage,res: http.ServerResponse) =>{
  throttleCount++;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Throttle count incremented', count: throttleCount }));
}
export const debouncedIncrement = debounceHandler(incrementDebounceCount, 2000);
export const throttledIncrement = throttleHandler(incrementThrottleCount, 2000); 
