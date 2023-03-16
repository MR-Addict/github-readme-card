import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  return res.render("index/index");
});

router.get("/repo", async (req: Request, res: Response) => {
  res.set("Content-Type", "image/svg+xml");
  return res.render("svg/repo");
});

export default router;
