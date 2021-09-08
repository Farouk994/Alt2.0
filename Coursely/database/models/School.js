const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
   name: {
      type: String,
   },
   description: {
      type: String,
   },
   location: {
      type: String,
   },
   date: {
      type: Date,
      default: Date.now(),
   },
   students: [
      {
         user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
         },
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
            type: Number,
         },
         date: {
            type: Date,
            default: Date.now,
         },
      },
   ],
});

const school = mongoose.model("school", SchoolSchema);

module.exports = school;
