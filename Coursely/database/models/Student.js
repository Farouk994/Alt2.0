const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
   name: {
      type: String,
   },
   course: [
      {
         subject: {
            type: String,
         },
         grade: {
            type: Number,
         },
      },
   ],
   city: {
      type: String,
   },
   school: {
      type: String,
   },
   ID: {
      type: String,
   },
});

const student = mongoose.model("student", StudentSchema);

module.exports = student;
