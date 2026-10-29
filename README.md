# Node API Basics

A small Node.js and Express learning project that serves a welcome page and a JSON list of courses. The source fits in one file, making the request/response flow easy to review.

**Scope:** coursework / backend foundations. Data is held in memory; this project has no database, authentication, or write endpoints.

## Run locally

Install Node.js and npm, then run from the repository root:

```bash
npm ci
npm start
```

The server listens at **http://localhost:5000**. The port is currently fixed in `index.js`.

## API

| Method | Route | Response |
| --- | --- | --- |
| GET | `/` | Text: `Welcome to Express` |
| GET | `/api/courses` | JSON array of sample course records |

Example:

```bash
curl http://localhost:5000/api/courses
```

The response contains objects with `id`, `name`, and `courses` fields.

## Code walkthrough

1. [`index.js`](./index.js) creates the Express application and defines both routes.
2. The `courses` array supplies the sample response.
3. `app.listen` starts the server on port 5000.
4. [`package.json`](./package.json) defines the start command; `package-lock.json` records dependencies.

## What this demonstrates

- Creating an Express server and registering GET routes.
- Returning text and structured JSON.
- Separating route paths and understanding HTTP request/response behaviour.
- Managing a Node project with npm.

## Current limits

This is an introductory example, not a production API. There is no persistence, input-validation layer, or automated test suite. The existing `npm test` command is a placeholder and intentionally exits with an error.
