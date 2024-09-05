const request = require("supertest");
const app = require("../server.js"); // Adjust this path to point to your Express app

describe("GET /api/product/get/:id", () => {
  it("Valid id: product found", async () => {
    const response = await request(app).get("/api/product/get/1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.id).toBeDefined();
    expect(response.body.id).toBe(1);
    expect(typeof response.body.id).toBe("number");
    expect(response.body.title).toBeDefined();
    expect(typeof response.body.title).toBe("string");
  });
  test("Invalid id- Large number: product not found", async () => {
    const response = await request(app).get("/api/product/get/12345");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("id doesn't exist");
  });
  test("Invalid id- ABC: product not found", async () => {
    const response = await request(app).get("/api/product/get/asdff");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("id doesn't exist");
  });
});

describe("POST /api/Product/add", () => {
  it("Valid field: product found", async () => {
    const data = {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    const response = await request(app).post("/api/Product/add").send(data);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(typeof response.body).toBe("object");
  });
  it("Invalid field: product found", async () => {
    const data = {
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    const response = await request(app).post("/api/Product/add").send(data);
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Missing required field");
  });
  it("Invalid field: product found", async () => {
    const data = {};
    const response = await request(app).post("/api/Product/add").send(data);
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Missing required field");
  });
});
