import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.on("error", (err) => {
  console.log("Redis client Error", err);
});

const startServer = async () => {
  try {
    await client.connect();
    console.log("Connected to Redis Client");

    app.listen(3000, () => {
      console.log("Express Server is running on port 3000");
    });
  } catch (error) {
    console.log("Failed to connect to Redis", error);
  }
};

startServer();

/*
Structure of Input request :
{
    problemId : 1
    code : " User-s Leetcode submission"
    language : "Java"
}
*/
app.post("/submit", async (req, res) => {
  const problemId = req.body.problemId;
  const code = req.body.code;
  const submissionLanguage = req.body.language;

  try {
    // Step 1 : Should store the response to Prisma or any other Database
    // Step 2 : Pushing the submission to Redis Queue
    await client.lPush(
      "problems",
      JSON.stringify({ problemId, code, submissionLanguage })
    );
    // Note: First arguement inside LPush method (problems) is the name of Queue. Also, Redis does not support objects. So, we have Stringify the inputs before pushing them to queue.
    res.status(200).send("Submission received and saved to Queue");
  } catch (error) {
    res.status(500).send("Failed to store response in Queue");
  }
});
