import fs from "fs";
import path from "path";

import config from "./loadconfig";
import { compileRepoCard } from "@/svg";

export default async function exportRepoCards() {
  const repos: { user: string; repo: string }[] = config.repos;
  if (!repos?.length) throw new Error("Incorrect repos configuration");

  const build_dir = path.join(process.cwd(), "public/output/repocards");
  fs.mkdirSync(build_dir, { recursive: true });

  const repoStrings = await Promise.all(repos.map((item) => compileRepoCard(item.user, item.repo)));

  await Promise.all(
    repoStrings.map((item, index) => fs.promises.writeFile(path.join(build_dir, repos[index].repo + ".svg"), item))
  );
}
