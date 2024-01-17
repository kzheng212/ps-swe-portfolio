import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
  console.log(`Connected to mongodb`);
} catch (e) {
  console.error(e);
}

const db = conn.db("sample_training");

export default db;
