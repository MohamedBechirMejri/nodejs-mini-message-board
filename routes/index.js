const express = require("express");

const router = express.Router();

const messages = require("../public/javascripts/messages");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

module.exports = router;
