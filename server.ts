import { Diplodocus } from "https://deno.land/x/diplodocus@0.0.3/mod.ts";

const diplodocus = await Diplodocus.load();

const PORT = 8080;
const listener = Deno.listen({ port: PORT });
console.log(`HTTP server listening on http://localhost:${PORT}`);

async function handleConn(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const e of httpConn) {
    e.respondWith(diplodocus.handler(e.request));
  }
}

for await (const conn of listener) {
  handleConn(conn);
}
