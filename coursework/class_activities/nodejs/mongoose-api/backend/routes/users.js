import { Router } from "express";
import User from "../models/users.js";

const router = new Router();

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(203).json(user);
});

export default router;
