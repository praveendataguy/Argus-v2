import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 8787);

// Health check: a tiny endpoint that says "the server is alive".
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "argus-server" });
});

app.listen(port, () => {
  console.log(`Argus server listening on http://localhost:${port}`);
});
