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

// User.insertMany([
//   { name: "Xyz", email: "xyz@gmail.com", age: 199 },
//   { name: "Yzx", email: "yzx@gmail.com", age: 299 },
//   { name: "Zxy", email: "zxy@gmail.com", age: 399 },
// ]).then((res) => {
//   console.log(res);
// });

//Mongoose uses Operation Buffering :- It means Mongoose lets you start using models immediately, without waiting for mogoose to establish a connection to MongoDB.

//Find in Database

//find()
// User.find({ age: { $gt: 19 } })
//   .then((res) => {
//     console.log(res[1].name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// findOne()
// User.findOne({ age: { $gt: 19 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//findOne() using id

// User.findOne({ _id: "66765f2d7ccbde99da32a4ae" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// or simply by using findById(" ID ")

// User.findById("66765de9a6e87d7607508b7d")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//UPDATE

//updateOne

// Employee.updateOne({ name: "AryanKumar" }, { age: 20 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   UpdateMany
// User.updateMany({ age: { $gt: 45 } }, { age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//to print along with updation(first prints and then update)--> to change this we use new:true

User.findOneAndUpdate({ name: "Xyz" }, { age: 45 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
