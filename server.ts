import { Diplodocus } from "https://deno.land/x/diplodocus@0.0.3/mod.ts";

const diplodocus = await Diplodocus.load();

Deno.serve({port: 8080}, (request) => diplodocus.handler(request))
