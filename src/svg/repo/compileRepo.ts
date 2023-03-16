import pug from "pug";
import path from "path";

import fetchRepo from "./fetchRepo";

const repoPugPath = path.join(process.cwd(), "src/svg/repo/repo.pug");
const repoCompileFun = pug.compileFile(repoPugPath);
const isDev = process.env.NODE_ENV === "Development";

export default async function compileRepo(user: string, repo: string) {
  const locals = await fetchRepo(user, repo);
  return isDev ? pug.renderFile(repoPugPath, locals) : repoCompileFun(locals);
}
