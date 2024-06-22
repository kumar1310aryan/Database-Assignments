const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//schema creation
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//creating collection in database
const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

//insertion (One)
// const user1 = new User({
//   name: "Aryan",
//   email: "kumar1310aryan@gmail.com",
//   age: 19,
// });

// user1.save();

// const employee1 = new Employee({
//   name: "AryanKumar",
//   email: "kumararyan@gmail.com",
//   age: 19,
// });

// employee1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//inserting Multiple

User.insertMany([
  { name: "Xyz", email: "xyz@gmail.com", age: 199 },
  { name: "Yzx", email: "yzx@gmail.com", age: 299 },
  { name: "Zxy", email: "zxy@gmail.com", age: 399 },
]).then((res) => {
  console.log(res);
});

//Mongoose uses Operation Buffering :- It means Mongoose lets you start using models immediately, without waiting for mogoose to establish a connection to MongoDB.
//