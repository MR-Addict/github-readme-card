import pug from "pug";
import path from "path";

import fetchRepo from "./fetchRepo";
import { workspacePath } from "../../loadenv";

const repoCardPath = path.join(workspacePath, "src/svg/repoCard/repoCard.pug");

export default async function compileRepoCard(user: string, repo: string) {
  const locals = await fetchRepo(user, repo);
  return pug.renderFile(repoCardPath, locals);
}
