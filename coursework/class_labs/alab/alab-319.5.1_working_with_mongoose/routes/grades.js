import express from "express";
// import { ObjectId } from "mongodb";
// import db from "../db/conn.js";
import Grade from "../models/grades.js";

const router = express.Router();

// Mongoose

router.get("/", async (req, res) => {
  const grades = await Grade.find({});

  if (!grades) return res.status(404).send("Not found");
  res.status(200).send(grades);
});

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const grades = await Grade.findById(userId);

  if (!grades) return res.status(404).send("Not found");
  res.status(200).send(grades);
});

router.post("/", async (req, res) => {
  // const collection = await db.collection('grades');
  const grades = await Grade.create(req.body);
  res.status(203).json(grades);
});

router.patch("/:id/scores/add", async (req, res) => {
  // find the grade to update
  const grades = await Grade.findOne({ _id: req.params.id });

  if (!grades) return res.send("Grade not found!");
  // add the new score (req.body) to the scores array
  grades.scores.push(req.body);
  // save doc
  await grades.save();
  res.send(grades);
});

router.delete(":id/remove", async (req, res) => {
  const userId = await Grade.deleteOne(req.params.id);

  if (!userId) return res.send("User's ID does not exist");
  res.status(200).send(userId);
});

export default router;
