// The funniest excuse for skipping a meeting.
// Writes the excuse to $MAKEFUN_OUTPUT_DIR/entry.txt and prints it.
// Deterministic: the same excuse, byte for byte, every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry I missed it. The meeting had no agenda, so I treated it as a fire drill and evacuated to the nearest email.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(ENTRY);
