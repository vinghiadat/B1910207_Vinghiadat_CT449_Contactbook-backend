const express = require("express");
const contacts = require("../controllers/contact.controller");
// const users = require("../controllers/user.controller");

const router = express.Router();

router.route("/")
  .get(contacts.findAll)
  .post(contacts.create)
  .delete(contacts.deleteAll)

router.route("/favorite")
  .get(contacts.findAllFavorite);

router.route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);


// router.route("/login")
// .post(users.create);

module.exports = router;
