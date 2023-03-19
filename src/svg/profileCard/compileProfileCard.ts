import pug from "pug";
import path from "path";

import fetchUser from "./fetchUser";
import { workspacePath } from "../../loadenv";

const profileCardPath = path.join(workspacePath, "src/svg/profileCard/profileCard.pug");

export default async function compileRepoCard(user: string) {
  const locals = await fetchUser(user);
  return pug.renderFile(profileCardPath, locals);
}
