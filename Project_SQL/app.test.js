const request = require("supertest");
const app = require("./server.js"); // Adjust this path to point to your Express app

describe("GET /data", () => {
  it("should respond with JSON data", async () => {
    const response = await request(app).get("/data");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();

    // expect(response.body.token).toBeDefined();
  });

  it("should respond with status code 200", async () => {
    const response = await request(app).get("/data");
    expect(response.statusCode).toBe(200);
  });
});

describe("add", () => {
  test("return success", () => {
    expect(app.add()).toBe("success");
  });
});

describe("sum", () => {
  test("sum two positive numbers", () => {
    expect(app.sum(1, 3)).toBe(4);
  });
});

describe("makeString", () => {
  test("making string 5", () => {
    expect(app.makeString(5)).toBe("5");
  });
  test("making string -5", () => {
    expect(app.makeString(-5)).toBe("-5");
  });
});

describe("post /baba", () => {
  it("should recieve status 200 and get an id", async () => {
    const data = { id: "37" };
    const response = await request(app).post("/baba").send(data);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.id).toBeDefined();
    expect(response.body.id).toBe("37");
  });
});

// // describe('POST /data', () => {
// //     it('should respond with a successful message', async () => {
// //         const mockData = { key: 'value' };
// //         const response = await request(app)
// //             .post('/data')
// //             .send(mockData);
// //         expect(response.statusCode).toBe(200);
// //         expect(response.body.message).toBe('Data successfully sent via Axios, and Selenium task completed');
//     });
// });
