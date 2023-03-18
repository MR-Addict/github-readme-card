import pug from "pug";
import path from "path";

import fetchUser from "./fetchUser";

const profileCardPath = path.join(process.cwd(), "src/svg/profileCard/profileCard.pug");

export default async function compileRepoCard(user: string) {
  const locals = await fetchUser(user);
  // const locals = {
  //   user: "MR-Addict",
  //   bio: "Happy coding and have a good day!",
  //   following: 132,
  //   followers: 91,
  //   public_repos: 84,
  // };

  return pug.renderFile(profileCardPath, locals);
}
