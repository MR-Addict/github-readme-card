import z from "zod";
import fs from "fs";
import path from "path";

const Repo = z.object({ user: z.string(), repo: z.string() });
const Profile = z.object({ user: z.string() });
const Config = z.object({ repos: z.array(Repo), profiles: z.array(Profile) });

const fullPath = path.join(process.cwd(), "config.json");
if (!fs.existsSync(fullPath)) throw new Error("Please add config.json");

const fileContents = fs.readFileSync(fullPath, "utf8");
const config = JSON.parse(fileContents);

const parsedConfig = Config.parse(config);

export default parsedConfig;
