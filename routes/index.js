const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "hi there!",
    user: "Arthur",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Karol",
    added: new Date(),
  },
];

router.post("/new", function (req, res) {
  const messageText = req.body.comment;
  const messageUser = req.body.name;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

router.get("/new", function (req, res, next) {
  res.render("form", { message: "Hello" });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
