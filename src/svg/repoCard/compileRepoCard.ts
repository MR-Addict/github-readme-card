import pug from "pug";
import path from "path";

import fetchRepo from "./fetchRepo";

const repoPugPath = path.join(process.cwd(), "src/svg/repoCard/repoCard.pug");

export default async function compileRepoCard(user: string, repo: string) {
  const locals = await fetchRepo(user, repo);
  return pug.renderFile(repoPugPath, locals);
}
