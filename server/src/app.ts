import express from "express";

// The app lives in its own file so tests can use it without starting a real server.
export const app = express();

// Health check: a tiny endpoint that says "the server is alive".
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "argus-server" });
});
