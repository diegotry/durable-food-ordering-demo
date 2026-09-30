import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { force: true, recursive: true });
await mkdir("dist/src", { recursive: true });
await Promise.all([
  cp("index.html", "dist/index.html"),
  cp("styles.css", "dist/styles.css"),
  cp("src/app.js", "dist/src/app.js"),
  cp("src/order.js", "dist/src/order.js"),
]);
console.log("Built demo-app/dist");
