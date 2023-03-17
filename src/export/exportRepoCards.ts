import fs from "fs";
import path from "path";

import { RepoConfigType } from "@/types";
import { compileRepoCard } from "@/svg";

async function readRepos() {
  const fullPath = path.join(process.cwd(), "config.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents).repos as RepoConfigType[];
}

export default async function exportRepoCards() {
  const build_dir = path.join(process.cwd(), "output/repocards");
  fs.mkdirSync(build_dir, { recursive: true });

  const repos = await readRepos();
  const repoStrings = await Promise.all(repos.map((item) => compileRepoCard(item.user, item.repo)));

  await Promise.all(
    repoStrings.map((item, index) => fs.promises.writeFile(path.join(build_dir, repos[index].repo + ".svg"), item))
  );
}
