import fs from "fs";
import path from "path";
import { config } from "dotenv";

config();

// get workspacePath and actio space
const workspacePath = process.env.GITHUB_WORKSPACE || process.cwd();
const actionPath = process.env.GITHUB_ACTIONS ? path.join(__dirname, "../../") : workspacePath;

// get github token
const githubToken = process.env.GITHUB_TOKEN || "";
if (!githubToken) throw new Error("Please add your GITHUB_TOKEN");

// get config.json and output path
const outputPath = process.env.OUTPUT_PATH || path.join(workspacePath, "github-readme-card");
const configPath = path.join(process.env.CONFIG_PATH || workspacePath, "config.json");

// check config.json exists
if (!fs.existsSync(configPath)) throw new Error("Please add correct config.json path");

console.log({ workspacePath, actionPath: __dirname, configPath, githubToken, outputPath });

// export constants
export { workspacePath, actionPath, configPath, githubToken, outputPath };
