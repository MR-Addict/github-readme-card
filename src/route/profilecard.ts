import express, { Request, Response } from "express";

import { compileProfileCard } from "../svg";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const user = req.query.user?.toString();
  if (!user?.length) return res.status(404).send("User infomation not found!");

  try {
    const result = await compileProfileCard(user);
    res.set("Content-Type", "image/svg+xml");
    return res.send(result);
  } catch (error) {
    console.error(error);
    return res.status(404).send("User infomation not found!");
  }
});

export default router;
