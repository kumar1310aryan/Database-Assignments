require("dotenv").config();

const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Home page
app.get("/", (req, res) => {
  let countQuery = `SELECT COUNT(*) AS totalCount FROM students_data`;

  connection.query(countQuery, (err, countResult) => {
    if (err) {
      console.log(err);
      return res.send("Some error in database.");
    }

    const totalCount = countResult[0].totalCount; // Get the total count from the result
    res.render("home", { totalCount }); // Pass the total count to the home view
  });
});

// Show users
// app.get("/user", (req, res) => {
//   let q = `SELECT * FROM user`;

//   connection.query(q, (err, users) => {
//     if (err) {
//       console.log(err);
//       return res.send("Some error in database.");
//     }
//     res.render("showusers", { users });
//   });
// });

// Show students
// app.get("/students", (req, res) => {
//   let q = `SELECT * FROM students_data`;

//   connection.query(q, (err, students) => {
//     if (err) {
//       console.log(err);
//       return res.send("Some error in database.");
//     }
//     res.render("showstudents", { students });
//   });
// });

app.get("/students", (req, res) => {
  let studentsQuery = `SELECT * FROM students_data`;
  let countQuery = `SELECT COUNT(*) AS totalCount FROM students_data`;

  connection.query(studentsQuery, (err, students) => {
    if (err) {
      console.log(err);
      return res.send("Some error in database.");
    }

    connection.query(countQuery, (err, countResult) => {
      if (err) {
        console.log(err);
        return res.send("Some error in database.");
      }

      const totalCount = countResult[0].totalCount; // Get the total count from the result
      res.render("showstudents", { students, totalCount });
    });
  });
});

// Form to add a student
app.get("/students/new", (req, res) => {
  res.render("newstudent");
});

// Create a new student
app.post("/students", (req, res) => {
  let { name, age, email } = req.body;
  let q = `INSERT INTO students_data (name, age, email) VALUES (?, ?, ?)`;

  connection.query(q, [name, age, email], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some error in database.");
    }
    res.redirect("/students");
  });
});

// Edit student form
app.get("/students/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM students_data WHERE id=?`;

  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some error in database.");
    }
    let student = result[0];
    res.render("editstudent", { student });
  });
});

// Update student information
app.patch("/students/:id", (req, res) => {
  let { id } = req.params;
  let { name, age, email } = req.body;
  let q = `UPDATE students_data SET name=?, age=?, email=? WHERE id=?`;

  connection.query(q, [name, age, email, id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some error in database.");
    }
    res.redirect("/students");
  });
});

// Delete student
app.delete("/students/:id", (req, res) => {
  let { id } = req.params;
  let q = `DELETE FROM students_data WHERE id=?`;

  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some error in database.");
    }
    res.redirect("/students");
  });
});

app.listen("8080", () => {
  console.log(`Listening to port 8080`);
});
