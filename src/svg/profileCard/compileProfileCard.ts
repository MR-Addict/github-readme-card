import pug from "pug";
import path from "path";

const profileCardPath = path.join(process.cwd(), "src/svg/profileCard/profileCard.pug");

export default async function compileRepoCard(user: string) {
  return pug.renderFile(profileCardPath, {
    user,
    bio: "Happy coding!",
    following: 130,
    followers: 90,
    public_repos: 85,
  });
}
