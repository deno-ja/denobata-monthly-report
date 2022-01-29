import { Diplodocus } from "https://deno.land/x/diplodocus@0.0.3/mod.ts";
import { serve } from "https://deno.land/std@0.116.0/http/server.ts";

const diplodocus = await Diplodocus.load();

const ADDR = ":8080";
console.log(`HTTP server listening on http://localhost${ADDR}`);

await serve(async (request) => await diplodocus.handler(request), { addr: ADDR })
