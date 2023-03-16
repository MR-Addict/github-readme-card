import "./loadenv";
import "module-alias/register";

import path from "path";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import views from "@/www/views";
import { repo } from "@/route";

const port = 3000;
const app = express();
const isLocalhost = process.env.ISLOCALHOST === "TRUE";

app.use(express.json());
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(process.cwd(), "public"), { maxAge: isLocalhost ? 0 : 1000 * 60 * 60 * 4 }));

app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "src/www/views"));

app.use("/", views);
app.use("/repo", repo);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
