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

module.exports = router;
