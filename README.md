# Redis-Queue-Implementation

1. **NodeJs backend -** It will work as `Producer` that takes a `problem submission` (very similar to leetcode) as input and sends/publish it to the queue.

2. **Worker -** It will work as a `Consumer` who will pick up a problem, wait for sometime (In real world, worker takes this time to process the operation. For example - evaluating Leetcode problem) and then it will proceed to pick next problem from the queue.

## Steps to run project locally

- Clone the repository :
  ```
  git clone https://github.com/ManjinderSingh3/Redis-Queue-Implementation.git
  ```
- Install dependencies

  ```
  cd express-server
  yarn install

  cd worker
  yarn install
  ```

- Start REDIS locally

  ```
  docker run --name my-redis -d -p 6379:6379 redis

  Connect to your docker container
  docker exec -it container_id /bin/bash

  Connect to the redis cli
  redis-cli
  ```

- Compile `express-server` folder and start the express server.

  ```
  tsc -b
  node dist/index.js
  ```

- Check the logs and you will see the backend server is running on port 3000.

## Steps to Populate to Redis Queue
- Open POSTMAN and hit http://localhost:3000/submit as a POST call. (An example of request body is attached as a comment along with /submit endpoint)
- It will PUBLISH to the queue.
- Double check if something is there in the queue by performing `RPOP problems`command on **Redis-CLI**. If there would be something in queue it will get popped out.

## Workers Picking up from the Queue
### How to replicate submitting multiple requests to queue and Workers picking them from queue
