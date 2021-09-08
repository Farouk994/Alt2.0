require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
   try {
      await mongoose.connect(process.env.DB, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log("Mongo DB connected <===");
   } catch (err) {
      console.log(err.message, "Connection Failed");
   }
}

module.exports = connectDB;
