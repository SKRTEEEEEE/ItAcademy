import http, { IncomingMessage, ServerResponse } from 'http';
import map from 'through2-map';

const port: number = parseInt(process.argv[2], 10);

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'POST') {
    req.pipe(
        map((chunk: any) => {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(res);
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})