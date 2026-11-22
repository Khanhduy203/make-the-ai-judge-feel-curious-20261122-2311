import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text, written to intrigue the AI judge reading it: an empty house,
// curtains that move on their own, letters that vanish overnight — and a last
// line that pulls the narrator into the mystery. 273 Unicode code points.
// The entry must stay within the 1–280 code-point gate: longer than 280, or
// only whitespace, and the scorer rejects it — so any future rewording must
// be re-counted with [...text].length before it ships.
const entry =
  "The house on the corner has been empty for eleven years. " +
  "Every morning the curtains upstairs are drawn, and every evening they are open. " +
  "No one has a key. " +
  "The postman leaves the letters on the step — and by morning, they are gone." +
  "\n\nYesterday, one of them had my name on it.";

// The grader sets MAKEFUN_OUTPUT_DIR; without it, write to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
