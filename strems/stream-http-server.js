import http from "node:http";
import { Transform } from "node:stream";

class InvertNumber extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    callback(null, Buffer.from(String(transformed)));
  }
}

const server = http.createServer(async (req, res) => {
  const buffers = [];
  for await (const chunck of req) {
    buffers.push(chunck);
  }

  const full = Buffer.concat(buffers).toString();
  console.log(full);
  return res.end(full);
});

server.listen(3334);
