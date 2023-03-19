import fs from "fs";
import path from "path";
import { config } from "dotenv";

config();

// get workspace
const workspace = process.env.GITHUB_WORKSPACE || process.cwd();

// get github token
const githubToken = process.env.GITHUB_TOKEN || "";
if (!githubToken) throw new Error("Please add your GITHUB_TOKEN");

// get config.json and outputpath
const outputPath = process.env.OUTPUT_PATH || path.join(workspace, "github-readme-card");
const configPath = path.join(process.env.CONFIG_PATH || workspace, "config.json");

// check config.json exists
if (!fs.existsSync(configPath)) throw new Error("Please add correct config.json path");

// export constants
export { workspace, configPath, githubToken, outputPath };
