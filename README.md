# Redis-Queue-Implementation
1. **NodeJs backend -**  It will work as `Producer` that takes a `problem submission` (very similar to leetcode) as input and sends it to the queue.

2. **Worker -** It will work as a `Consumer` who will pick up a problem, wait for sometime (In real world, worker takes this time to process the operation. For example - evaluating Leetcode problem) and then it will proceed to pick next problem from the queue.

## Steps to run project locally
- Clone the repo
- 