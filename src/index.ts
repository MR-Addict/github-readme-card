import "./loadenv";

import path from "path";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import { workspace } from "./loadenv";
import { repocard, profilecard } from "./route";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static(path.join(workspace, "public")));

app.set("view engine", "pug");
app.set("views", path.join(workspace, "src/www/views"));

app.use("/repocard", repocard);
app.use("/profilecard", profilecard);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
