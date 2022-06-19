const express = require("express");
const messages = require("../public/javascripts/messages");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.render("new");
});
router.post("/", (req, res, next) => {
  const message = {
    text: req.body.text,
    user: req.body.user,
    added: new Date().toLocaleString(),
  };

  messages.push(message);
  res.redirect("/");
});

module.exports = router;
