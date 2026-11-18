import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";

describe("GET /api/health", () => {
  it("returns 200 and says the server is ok", async () => {
    const res = await request(app).get("/api/health");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true, service: "argus-server" });
  });

  it("returns 404 for a route that does not exist", async () => {
    const res = await request(app).get("/api/nope");

    expect(res.status).toBe(404);
  });
});
