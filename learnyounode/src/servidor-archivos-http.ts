import http, { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';

const port: number = parseInt(process.argv[2], 10);
const filePath: string = process.argv[3];

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // Establecer el encabezado de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Crear un stream de lectura para el archivo
  const readStream = fs.createReadStream(filePath);

  // Manejar errores en el stream de lectura
  readStream.on('error', (err) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
    console.error(err);
  });

  // Pipe el contenido del archivo al response
  readStream.pipe(res);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
