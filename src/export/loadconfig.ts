import z from "zod";
import fs from "fs";

import { configPath } from "../loadenv";

const Repo = z.object({ user: z.string(), repo: z.string() });
const Profile = z.object({ user: z.string() });
const Config = z.object({ repos: z.array(Repo), profiles: z.array(Profile) });

const fileContents = fs.readFileSync(configPath, "utf8");
const config = JSON.parse(fileContents);

const parsedConfig = Config.parse(config);

export default parsedConfig;
