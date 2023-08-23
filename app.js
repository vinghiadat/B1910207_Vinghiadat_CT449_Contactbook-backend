const express = require("express");
const cors = require("cors");

const app = express();
const contactsRouter = require("./app/routes/contact.route");
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.get("/", (reg, res) => {
    res.json({message: "Welcome to contact book app;ication"});
});

module.exports = app;