// // server.ts

// import http from 'http';
// import fs from 'fs';
// import path from 'path';
// // import { debouncedIncrement, throttledIncrement } from './handle';
// import { TokenBucket } from './utils/token-bucket';

// const hostname = 'localhost';
// const port = 4001;

// const debounceBucket = new TokenBucket(5, 1);
// const throttleBucket = new TokenBucket(5, 1);

// let debouncePromise: Promise<void> | null = null;
// let debounceResolve: (() => void) | null = null;

// const serveStaticFile = (filePath: string, res: http.ServerResponse) => {
//   const ext = path.extname(filePath);
//   const contentTypeMap: { [key: string]: string } = {
//     '.html': 'text/html',
//     '.js': 'application/javascript',
//     '.css': 'text/css',
//   };
//   const contentType = contentTypeMap[ext] || 'text/plain';

//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       res.writeHead(500);
//       res.end('Internal Server Error');
//     } else {
//       res.writeHead(200, { 'Content-Type': contentType });
//       res.end(content);
//     }
//   });
// };

// // const executeDebounceIncrement = (req: http.IncomingMessage, res: http.ServerResponse) => {
// //    debouncedIncrement(req, res);
// // };

// const server = http.createServer((req, res) => {
//   const publicPath = path.resolve(__dirname, '..', 'public');

//   if (req.url === '/' || req.url === '/index.html') {
//     const filePath = path.join(publicPath, 'index.html');
//     serveStaticFile(filePath, res);
//   } else if (req.url?.startsWith('/public/') || req.url?.startsWith('/dist/')) {
//     const filePath = path.join(__dirname, '..', req.url);
//     serveStaticFile(filePath, res);
//   } else if (req.url === '/debounce' && req.method === 'GET') {
//     if (debouncePromise) {
//       // Cancelar la promesa pendiente si existe
//       debounceResolve && debounceResolve();
//     }
//     debouncePromise = new Promise<void>((resolve) => {
//       debounceResolve = resolve;
//       setTimeout(() => {
//         executeDebounceIncrement(req, res);
//         debouncePromise = null; // Limpiamos la promesa después de ejecutar la función
//       }, 2000);
//     });
//   } else if (req.url === '/throttle' && req.method === 'GET') {
//     if (throttleBucket.remove() === 200) {
//       throttledIncrement(req, res);
//     } else {
//       res.writeHead(429, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ message: 'Too Many Requests' }));
//     }
//   } else {
//     res.statusCode = 404;
//     res.end(JSON.stringify({ message: 'Not Found' }));
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
