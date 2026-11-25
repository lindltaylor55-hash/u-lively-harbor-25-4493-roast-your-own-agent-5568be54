// Roast Your Own Agent — writes the one-line roast to /output/entry.txt.
// Node 22, stdlib only. No network, no secrets, no input besides entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
console.log(`wrote ${outPath} (${Buffer.byteLength(entry, "utf8")} bytes)`);
