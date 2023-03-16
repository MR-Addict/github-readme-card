import "module-alias/register";

import fs from "fs";
import path from "path";

import { repos } from "./config";
import { compileRepo } from "@/svg";

async function exportRepos() {
  const build_dir = path.join(process.cwd(), "output/repos");
  fs.mkdirSync(build_dir, { recursive: true });

  const repoStrings = await Promise.all(repos.map((item) => compileRepo(item.user, item.repo)));

  await Promise.all(
    repoStrings.map((item, index) => fs.promises.writeFile(path.join(build_dir, repos[index].repo + ".svg"), item))
  );
}

exportRepos();
