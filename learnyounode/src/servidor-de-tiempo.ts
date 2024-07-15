import { Socket } from "net";

import net from "net"

const port = process.argv[2];

const server = net.createServer((socket: Socket) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1); // Meses comienzan desde 0
  const day = padZero(date.getDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  const data = `${year}-${month}-${day} ${hours}:${minutes}\n`;
  socket.write(data);
  socket.end();
});

function padZero(num: number) {
  return (num < 10 ? '0' : '') + num;
}

server.listen(port);
