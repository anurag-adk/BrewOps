const request = require("supertest");
const app = require("../server");

describe("BrewOps API Endpoints", () => {
  describe("GET /", () => {
    it("should return welcome message", async () => {
      const res = await request(app).get("/");
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("Welcome to BrewOps");
    });
  });

  describe("GET /menu", () => {
    it("should return the coffee menu", async () => {
      const res = await request(app).get("/menu");
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("BrewOps Coffee Menu");
      expect(Array.isArray(res.body.items)).toBe(true);
    });
  });

  describe("GET /orders", () => {
    it("should return all orders", async () => {
      const res = await request(app).get("/orders");
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("All Orders");
      expect(Array.isArray(res.body.orders)).toBe(true);
    });
  });

  describe("POST /order", () => {
    it("should create a new order", async () => {
      const orderData = {
        customerName: "John Doe",
        items: [{ id: 1, quantity: 2 }],
      };

      const res = await request(app).post("/order").send(orderData);

      expect(res.statusCode).toBe(201);
      expect(res.body.message).toBe("Order placed successfully!");
      expect(res.body.order.customerName).toBe("John Doe");
    });

    it("should return 400 for invalid order", async () => {
      const res = await request(app).post("/order").send({});

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBeDefined();
    });
  });
});
