const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running ALIF");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
