const express = require("express");
const app = express();
const PORT = 5000;

app.use((req, res) => {
  res.send("hello from the server 05 !!!");
});

app.listen(PORT, () => {
  console.log("server is started at the port", PORT);
});
