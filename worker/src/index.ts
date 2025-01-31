import { createClient } from "redis";
const client = createClient();

// This function will process the submission once it is picked by a worker
const processSubmission = async (submission: string) => {
  const { problemId, code, language } = JSON.parse(submission);
  // Actual Processing Logic will come here
  console.log(`Processing Problem Id: ${problemId}`);
  console.log(`Code : ${code}`);
  console.log(`Coding Language: ${language}`);

  // Simulating expensive operation like evaluating leetcode submission.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Finished processing problem Id : ${problemId}`);
};

// This function will Pick from Queue
const startWorker = async () => {
  try {
    await client.connect();
    console.log("Worker connected to Redis");

    while (true) {
      try {
        // Step 1: Pick Submission from the Queue
        const pickedSubmission = await client.brPop("problems", 0); // Queue name - problems
        // Step 2 : Perform some operation on the submission/Evaluate Leetcode Submission
        //@ts-ignore
        await processSubmission(pickedSubmission.element);
        // Step 3: TODO - After processing is done send to PUB-SUB
      } catch (error) {
        console.error("Error while processing submission", error);
      }
    }
  } catch (error) {
    console.error("Failed to connect to REDIS", error);
  }
};

startWorker();
