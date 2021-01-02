const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Html/home.html");
});
app.get("/n", (req, res) => {
  res.sendFile(__dirname + "/Html/index.html");
});

app.listen(port, () => console.log(`Listining to port ${port}`));
