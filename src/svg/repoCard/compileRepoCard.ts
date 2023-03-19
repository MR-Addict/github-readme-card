import pug from "pug";
import path from "path";

import fetchRepo from "./fetchRepo";
import { actionPath } from "../../loadenv";

const repoCardPath = path.join(actionPath, "src/svg/repoCard/repoCard.pug");

export default async function compileRepoCard(user: string, repo: string) {
  const locals = await fetchRepo(user, repo);
  return pug.renderFile(repoCardPath, locals);
}
