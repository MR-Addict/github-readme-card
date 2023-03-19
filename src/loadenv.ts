import fs from "fs";
import { config } from "dotenv";

config();

const configPath = process.env.CONFIG_PATH || "";
const githubToken = process.env.GITHUB_TOKEN || "";
if (configPath === "") throw new Error("Please add CONFIG_PATH");
if (githubToken === "") throw new Error("Please add your GITHUB_TOKEN");
if (!fs.existsSync(configPath)) throw new Error("Please add correct config.json path");

export { configPath, githubToken };
