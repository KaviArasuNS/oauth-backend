import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT;
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB is connected");
  return client;
}

export const client = await createConnection();

// Capstone Database

app.get("/", function (req, res) {
  res.send("Great! Server is running and this is the homepage");
});

// CHART JS ROUTER
app.post("/chartjs", async function (req, res) {
  const data = req.body;
  console.log(data);
  const result = await client.db("guvi").collection("chartjs").insertMany(data);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
