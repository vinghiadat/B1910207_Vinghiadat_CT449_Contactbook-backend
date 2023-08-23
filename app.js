const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (reg, res) => {
    res.json({message: "Welcome to contact book app;ication"});
});

module.exports = app;