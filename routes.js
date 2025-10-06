const express = require("express");
const router = express.Router();

//Using json file instead of DB (for demo only)
const menu = require("./menu.json");

// In-memory orders storage (for demo only)
let orders = [];
let orderIdCounter = 1;

// Welcome...
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to BrewOps",
    description:
      "A simple Cafe Management System developed by Anurag demonstrating concepts of DevOps, CI/CD & Containerization as an assignment for LSPP.",
    endpoints: {
      "GET /": "Welcome",
      "GET /menu": "View coffee menu",
      "POST /order": "Place a new order",
      "GET /orders": "View all orders",
    },
  });
});

// Get menu...
router.get("/menu", (req, res) => {
  res.json({
    message: "BrewOps Coffee Menu",
    items: menu,
  });
});

// Place order...
router.post("/order", (req, res) => {
  const { customerName, items } = req.body;

  // Validate request
  if (!customerName || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      error: "Invalid order. Please provide valid Customer Name and Items.",
    });
  }

  // Validate items and calculate total
  let total = 0;
  const validItems = [];

  for (const item of items) {
    const menuItem = menu.find((m) => m.id === item.id);
    if (!menuItem) {
      return res.status(400).json({
        error: `Menu item with id ${item.id} not found.`,
      });
    }

    const quantity = item.quantity || 1;
    validItems.push({
      ...menuItem,
      quantity: quantity,
    });
    total += menuItem.price * quantity;
  }

  // Create order
  const order = {
    id: orderIdCounter++,
    customerName,
    items: validItems,
    total: Math.round(total * 100) / 100, // Round to 2 decimal places
    status: "pending",
    orderTime: new Date().toISOString(),
  };

  orders.push(order);

  res.status(201).json({
    message: "Order placed successfully!",
    order: order,
  });
});

// Get all orders...
router.get("/orders", (req, res) => {
  res.json({
    message: "All Orders",
    totalOrders: orders.length,
    orders: orders,
  });
});

module.exports = router;
