# Redis-Queue-Implementation
1. **NodeJs backend -**  It will work as `Producer` that takes a `problem submission` (very similar to leetcode) as input and sends it to the queue.

2. **Worker -** It will work as a `Consumer` who will pick up a problem, wait for sometime (In real world, worker takes this time to process the operation. For example - evaluating Leetcode problem) and then it will proceed to pick next problem from the queue.

## Steps to run project locally
- Clone the repository :
    ```
    git clone https://github.com/ManjinderSingh3/Redis-Queue-Implementation.git
    cd express-server
    cd worker
    ```
- Install dependencies using `yarn install | npm install` inside both  `express-server` and `worker` folder.
- Compile `express-server` folder and start the express server.
    ```
    cd express-server
    tsc -b
    node dist/index.js
    ```

- Start the development server with `yarn dev | npm run dev`
- Navigate to http://localhost:3000 to access the application.

### How to replicate submitting multiple requests to queue and Workers picking them from queue