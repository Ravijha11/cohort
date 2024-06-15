const express = require("express");
const app = express();
app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyid = req.query.kidneyid;

  if (username != "harkirat" || password != "pass") {
    res.status(400).json({ "msg ": "somethings up with your to inputs" });
    return;
  }
  if (kidneyid != 1 && kidneyid != 2) {
    res.status(400).json({ msg: "somethings up with your inputs" });
    return;
  }
  res.json({
    "msg": "success",
  });
});
app.listen(3000);
