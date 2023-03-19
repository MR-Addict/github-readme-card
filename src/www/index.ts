import "../loadenv";

import fs from "fs";
import pug from "pug";
import path from "path";

import { formatDate } from "../lib";
import { workspace } from "../loadenv";

const profileCardPath = path.join(workspace, "src/www/views/index.pug");

async function compileIndex() {
  const public_dir = path.join(workspace, "public");
  fs.mkdirSync(public_dir, { recursive: true });

  const index_html = pug.renderFile(profileCardPath, { last_update: formatDate(new Date()) });
  await fs.promises.writeFile(path.join(public_dir, "index.html"), index_html);
}

compileIndex();
