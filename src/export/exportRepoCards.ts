import fs from "fs";
import path from "path";

import config from "./loadconfig";
import { outputPath } from "../loadenv";
import { compileRepoCard } from "../svg";

export default async function exportRepoCards() {
  const repos = config.repos;

  const build_dir = path.join(outputPath, "repocards");
  fs.mkdirSync(build_dir, { recursive: true });

  const repoStrings = await Promise.all(repos.map((item) => compileRepoCard(item.user, item.repo)));

  await Promise.all(
    repoStrings.map((item, index) => fs.promises.writeFile(path.join(build_dir, repos[index].repo + ".svg"), item))
  );
}

exportRepoCards();
