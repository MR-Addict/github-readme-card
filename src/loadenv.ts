import fs from "fs";
import path from "path";
import { config } from "dotenv";

config();

const rawConfigPath = process.env.CONFIG_PATH || "";
const outputPath = process.env.OUTPUT_PATH || "";
const githubToken = process.env.GITHUB_TOKEN || "";
if (rawConfigPath === "") throw new Error("Please add CONFIG_PATH");
if (outputPath === "") throw new Error("Please add output OUTPUT_PATH");
if (githubToken === "") throw new Error("Please add your GITHUB_TOKEN");

const configPath = path.join(rawConfigPath, "config.json");
if (!fs.existsSync(configPath)) throw new Error("Please add correct config.json path");

export { configPath, githubToken, outputPath };
