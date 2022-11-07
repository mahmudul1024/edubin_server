const express = require("express");
const app = express();
const port = process.env.Port || 5000;

const courses = require("./Data/courses.json");
const cors = require("cors");
app.use(cors());

// here id means thae given id from the client user
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  let selectedId = courses.find((m) => m._id == id);
  res.send(selectedId);
});

app.get("/", (req, res) => {
  res.send("edubin api running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

// app.get("/courses/:id", (req, res) => {
//   const id = req.params.id;
//   const matched_id = courses.find((co) => co.id === id);
//   res.send(matched_id);
// });

app.listen(port, () => {
  console.log("edubin server running on port ", port);
});
