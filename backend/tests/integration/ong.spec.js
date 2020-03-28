const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(() => {
    connection.destroy();
  });

  it("Should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAD",
        email: "apad@apad.com",
        whatsapp: "2455668855",
        city: "Três Rios",
        uf: "RJ"
      });
    expect(response.body).toHaveProperty("id");
  });
});
