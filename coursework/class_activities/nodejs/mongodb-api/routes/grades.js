import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/conn.js";

const router = express.Router();

/**
 * GET /:id
 */
router.get("/:id", async (req, res) => {
  const collection = await db.collection("grades");

  const query = { _id: new ObjectId(req.params.id) };

  const result = await collection.findOne(query);

  if (!result) res.status(404).send("Not found");
  else res.status(200).send(result);
  // else res.send(result).status(200);
});

/**
 * POST /
 */

router.post("/", async (req, res) => {
  const collection = await db.collection("grades");
  const newDocument = req.body;
  console.log(newDocument);

  if (newDocument.student_id) {
    newDocument.learner_id = newDocument.student_id;
    delete newDocument.student_id;
  }

  const result = await collection.insertOne(newDocument);
  res.status(204).send(result);
  // res.send(result).status(204);
});

/**
 * GET /student/:id
 */
router.get("/student/:id", async (req, res) => {
  res.redirect(`/grades/learner/${req.params.id}`);
});

/**
 * GET /learner/:id
 */
router.get("/learner/:id", async (req, res) => {
  const collection = await db.collection("grades");
  const query = { learner_id: Number(req.params.id) };
  const result = await collection.find(query).toArray();

  if (!result) res.status(404).send("Not found");
  else res.status(200).send(result);
  // else res.send(result).status(200);
});

/**
 * GET /class/:id
 */
router.get("/class/:id", async (req, res) => {
  const collection = await db.collection("grades");
  const query = { class_id: Number(req.params.id) };
  const result = await collection.find(query).toArray();

  if (result.length < 1) res.status(404).send("Not Found");
  else res.status(200).send(result);
  // else res.send(result).status(200);
});

export default router;

// use sample_training
// db.grades.updateMany({}, {$rename: {"student_id": "learner_id"} })
