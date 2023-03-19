import "./loadenv";

import path from "path";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import { repocard, profilecard } from "./route";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static(path.join(process.cwd(), "public")));

app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "src/www/views"));

app.use("/repocard", repocard);
app.use("/profilecard", profilecard);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
