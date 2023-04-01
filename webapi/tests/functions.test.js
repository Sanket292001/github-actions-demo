const functions = require("../functions");
const request = require("supertest");
const app = require("../index");

it("Adds 1+3 equals to 4", () => {
  expect(functions.sum(1, 3)).toBe(5);
});

it("Abs Subtract 3-5 equals to 2", () => {
  expect(functions.absSub(3, 5)).toBe(2);
});

describe("Endpoint Tests", () => {
  it("Test / endpoint", async () => {
    const res = await request(app.app).get("/");
    app.server.close();
    expect(res.statusCode).toBe(200);
  });

  it("Test /targets endpoint", async () => {
    const res = await request(app.app).get("/targets");
    app.server.close();
    expect(res.statusCode).toBe(200);
  });
});
