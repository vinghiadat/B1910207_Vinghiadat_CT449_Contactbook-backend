const express = require("express");
const contactsRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");
const cors = require("cors");

const app = express();

app.use("/api/contacts", contactsRouter);
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});
app.use(cors());
app.use(express.json());
app.get("/", (reg, res) => {
  res.json({ message: "Welcome to contact book application." });
});
module.exports = app;
