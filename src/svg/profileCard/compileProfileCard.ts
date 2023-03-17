import pug from "pug";
import path from "path";

import fetchUser from "./fetchUser";

const profileCardPath = path.join(process.cwd(), "src/svg/profileCard/profileCard.pug");

export default async function compileRepoCard(user: string) {
  const locals = await fetchUser(user);
  return pug.renderFile(profileCardPath, locals);
}
