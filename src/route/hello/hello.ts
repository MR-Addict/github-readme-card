import express, { Request, Response } from "express";

import { formatDate } from "@/lib/util";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const now = formatDate(new Date());
  return res.status(200).send(`[${now}] Hello world`);
});

export default router;
