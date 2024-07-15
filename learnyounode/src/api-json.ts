import http, { IncomingMessage, ServerResponse } from 'http';

const port: number = parseInt(process.argv[2], 10);

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = new URL(req.url || "", `http://localhost:${port}`)
  if(req.method === "GET" && parsedUrl.pathname === "/api/parsetime"){
    const iso = parsedUrl.searchParams.get("iso")
    if(iso){
        const date = new Date(iso)
        const result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        
        }
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({"error": "Invalid ISO format"}));
    }
  } else if (req.method === "GET" && parsedUrl.pathname === "/api/unixtime") {
    const iso = parsedUrl.searchParams.get("iso")
    if(iso){
        const date = new Date(iso)
        const result = {
            unixtime: date.getTime()
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({"error": "Invalid ISO format"}));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({"error": "Not Found"}));
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});