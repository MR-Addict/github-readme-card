import fs from "fs";
import path from "path";

const fullPath = path.join(process.cwd(), "config.json");
if (!fs.existsSync(fullPath)) throw new Error("Please add config.json");

const fileContents = fs.readFileSync(fullPath, "utf8");
const config = JSON.parse(fileContents);

export default config;
