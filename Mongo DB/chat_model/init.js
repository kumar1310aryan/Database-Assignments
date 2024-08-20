const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

Chat.insertMany([
  {
    from: "Aryan",
    to: "Prachii",
    msg: "hii prachi",
    created_at: new Date(),
  },
]);
