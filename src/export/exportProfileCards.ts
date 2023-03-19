import fs from "fs";
import path from "path";

import config from "./loadconfig";
import { compileProfileCard } from "../svg";

export default async function exportProfileCards() {
  const profiles = config.profiles;

  const build_dir = path.join(process.cwd(), "public/output/profilecards");
  fs.mkdirSync(build_dir, { recursive: true });

  const profileStrings = await Promise.all(profiles.map((item) => compileProfileCard(item.user)));

  await Promise.all(
    profileStrings.map((item, index) =>
      fs.promises.writeFile(path.join(build_dir, profiles[index].user + ".svg"), item)
    )
  );
}

exportProfileCards();
