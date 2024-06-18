const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "aryandatabases",
});

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;

  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("some error in database.");
    }
    let count = result[0]["count(*)"];
    console.log(count);
    res.render("home", { count });
  });
});

// Show users
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;

  connection.query(q, (err, users) => {
    if (err) {
      console.log(err);
      return res.send("some error in database.");
    }
    res.render("showusers", { users });
  });
});

// Edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id=?`;

  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("some error in database.");
    }
    let user = result[0];
    console.log(user);
    res.render("edit", { user });
  });
});

// Update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id=?`;

  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("some error in database.");
    }
    let user = result[0];

    // Check if the provided password matches the stored password
    if (formPass !== user.password) {
      res.send("Wrong Password");
    } else {
      let q2 = `UPDATE user SET username=? WHERE id=?`;
      connection.query(q2, [newUsername, id], (err, result) => {
        if (err) {
          console.log(err);
          return res.send("some error in database.");
        }
        res.redirect("/user"); // Redirect after update
      });
    }
  });
});

app.listen("8080", () => {
  console.log(`Listening to port 8080`);
});
