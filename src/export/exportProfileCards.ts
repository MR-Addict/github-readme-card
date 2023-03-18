import fs from "fs";
import path from "path";

import config from "./loadconfig";
import { compileProfileCard } from "@/svg";

export default async function exportProfileCards() {
  const users: string[] = config.users;
  if (!users?.length) throw new Error("Incorrect user configuration");

  const build_dir = path.join(process.cwd(), "public/output/profilecards");
  fs.mkdirSync(build_dir, { recursive: true });

  const profileStrings = await Promise.all(users.map((item) => compileProfileCard(item)));

  await Promise.all(
    profileStrings.map((item, index) => fs.promises.writeFile(path.join(build_dir, users[index] + ".svg"), item))
  );
}

exportProfileCards();
