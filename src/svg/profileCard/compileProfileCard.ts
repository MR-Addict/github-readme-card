import pug from "pug";
import path from "path";

import fetchUser from "./fetchUser";
import { actionPath } from "../../loadenv";

const profileCardPath = path.join(actionPath, "src/svg/profileCard/profileCard.pug");

export default async function compileRepoCard(user: string) {
  const locals = await fetchUser(user);
  return pug.renderFile(profileCardPath, locals);
}
