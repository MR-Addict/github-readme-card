import "module-alias/register";

import fs from "fs";
import path from "path";
import { compileRepo } from "@/svg";

async function exportAll() {
  const build_dir = path.join(process.cwd(), "output/repo");
  fs.mkdirSync(build_dir, { recursive: true });

  const repoString = await compileRepo("MR-Addict", "github-readme-card");
  fs.writeFile(path.join(build_dir, "github-readme-card.svg"), repoString, (err) => {});
}

exportAll();
