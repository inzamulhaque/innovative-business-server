const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("Server Running TEST");
=======
  res.send("Server Running sakib 1235");
>>>>>>> 39c31e8d0e49e070ecfaad4ff61c21bed964ca25
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
