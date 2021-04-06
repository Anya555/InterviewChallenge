const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const app = express();
const db = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose
  .connect("mongodb://localhost:27017/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the Database successfully");
  });

// insert some data
db.Book.create([
  {
    name: "Harry Potter",
  },
  {
    name: "Lord of the Rings",
  },
  {
    name: "Long Bright River",
  },
]);

// Start an app an click on "Click here to see books list" link in browser to get a list of books
app.get("/api/books", async (req, res) => {
  try {
    const books = await db.Book.find({});
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
