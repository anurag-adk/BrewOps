const express = require("express");
const routes = require("./routes/routes");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

// Routes...
app.use("/", routes);

// Undefined Routes
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    message: "Please check the available endpoints at GET /",
  });
});

// Start server only if not in test environment
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`BrewOps server started at port: ${PORT}`);
  });
}

module.exports = app;
