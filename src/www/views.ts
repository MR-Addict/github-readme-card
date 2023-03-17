import fs from "fs";
import pug from "pug";
import path from "path";

const profileCardPath = path.join(process.cwd(), "src/www/views/index.pug");

async function compileIndex() {
  const public_dir = path.join(process.cwd(), "public");
  fs.mkdirSync(public_dir, { recursive: true });

  const index_html = pug.renderFile(profileCardPath);
  await fs.promises.writeFile(path.join(public_dir, "index.html"), index_html);
}

compileIndex();
