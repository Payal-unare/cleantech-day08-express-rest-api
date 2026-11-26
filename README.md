# Day 08 — Node.js & Express REST API

## Resource: Items (in-memory)

| Method | Endpoint | Success | Purpose |
|---|---|---|---|
| GET | `/api/items` | 200 | List all |
| GET | `/api/items/:id` | 200 | Read one; 404 if missing |
| POST | `/api/items` | 201 | Create `{ "name": "Glass Bottle", "category": "Reuse" }`; 400 if invalid |
| PUT | `/api/items/:id` | 200 | Update; 404 if missing |
| DELETE | `/api/items/:id` | 204 | Delete; 404 if missing |
| GET | `/health` | 200 | Health check |

## Architecture
`routes → controllers → services → data` with JSON 404 middleware and centralized error middleware. Express JSON parsing is installed before routes. Data is intentionally in-memory and resets on restart, matching the task.

## Run & test
```bash
npm install
npm run dev
```
Use Postman or curl against `http://localhost:4000/api/items`. Example:
```bash
curl -X POST http://localhost:4000/api/items -H "Content-Type: application/json" -d "{\"name\":\"Glass Bottle\",\"category\":\"Reuse\"}"
```
