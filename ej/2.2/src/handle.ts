// import http from "http"
// import { debounceHandler } from "./utils/debounce";
// import { throttleHandler } from "./utils/throttle";
// // import { fetchPokemonData } from "./app";
// // import { debounceHandler } from "./utils/debounce";

// // let offset = 0;
// // const limit = 10;

// // const handleFetch = async (req:http.IncomingMessage, res:http.ServerResponse ) => {
// //     try {
// //         const data = await fetchPokemonData(offset, limit);
// //         const response = {
// //           from: offset + 1,
// //           to: offset + data.length,
// //           data
// //         };
// //         offset += limit;
  
// //         res.writeHead(200, { 'Content-Type': 'application/json' });
// //         res.end(JSON.stringify(response));
// //       } catch (error) {
// //         res.writeHead(500, { 'Content-Type': 'application/json' });
// //         res.end(JSON.stringify({ error: 'Failed to fetch Pokémon data' }));
// //       }
// // }

// // export const debouncedFetch = debounceHandler(handleFetch, 2000);

// let throttleCount = 0;
// let debounceCount = 0;


// export const incrementDebounceCount = (req:http.IncomingMessage,res: http.ServerResponse) =>{
//   debounceCount++;
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({ message: 'Debounce count incremented', count: debounceCount }));
// }

// export const incrementThrottleCount = (req:http.IncomingMessage,res: http.ServerResponse) =>{
//   throttleCount++;
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({ message: 'Throttle count incremented', count: throttleCount }));
// }
// export const debouncedIncrement = debounceHandler(incrementDebounceCount, 2000);

// export const throttledIncrement = throttleHandler(incrementThrottleCount, 2000); 
// handle.ts

import { IncomingMessage, ServerResponse } from 'http';
import { debounce } from './utils/debounce';
import { throttle } from './utils/throttle';

let debounceFullCount = 0;
let throttleFullCount = 0;

let debounceMixedCount = 0;
let throttleMixedCount = 0;



const incrementDebounceFullCount = (req: IncomingMessage, res: ServerResponse) => {
  debounceFullCount++;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Debounce count incremented', count: debounceFullCount }));
};

const incrementThrottleFullCount = (req: IncomingMessage, res: ServerResponse) => {
  throttleFullCount++;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Throttle count incremented', count: throttleFullCount }));
};

const incrementDebounceMixedCount = (req: IncomingMessage, res: ServerResponse) => {
  debounceMixedCount++;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Debounce count incremented', count: debounceMixedCount }));
};
const incrementThrottleMixedCount = (req: IncomingMessage, res: ServerResponse) => {
  throttleMixedCount++;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Throttle count incremented', count: throttleMixedCount }));
};


export const debouncedFullIncrement = debounce(incrementDebounceFullCount, 2000);
export const throttledFullIncrement = throttle(incrementThrottleFullCount, 2000);
export const debouncedMixedIncrement = debounce(incrementDebounceMixedCount, 2000);
export const throttledMixedIncrement = throttle(incrementThrottleMixedCount, 2000);
