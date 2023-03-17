import "module-alias/register";
import "@/loadenv";

import path from "path";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import views from "@/www/views";
import { repocard } from "@/route";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static(path.join(process.cwd(), "public")));
app.use("/output", express.static(path.join(process.cwd(), "output")));

app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "src/www/views"));

app.use("/", views);
app.use("/repocard", repocard);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
