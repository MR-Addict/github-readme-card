import express, { Request, Response } from "express";

import { compileRepoCard } from "@/svg";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const user = req.query.user?.toString();
  const repo = req.query.repo?.toString();
  if (!user?.length || !repo?.length) return res.status(404).send("Repository infomation not found!");

  try {
    const result = await compileRepoCard(user, repo);
    res.set("Content-Type", "image/svg+xml");
    return res.send(result);
  } catch (error) {
    console.error(error);
    return res.status(404).send("Repository infomation not found!");
  }
});

export default router;
