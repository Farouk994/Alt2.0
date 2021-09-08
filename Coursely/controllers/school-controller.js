const School = require("../database/models/School");
const HttpError = require("../database/models/http-errors");
const { json } = require("body-parser");

//? @route api/school/new
//? @desc Post schools, only for Admin
//? @access Public

exports.add_School = async (req, res, next) => {
   try {
      const newSchool = new School({
         name: "Kamikaze High School",
         description: "Rockets and Sports",
         location: "San Diego, California",
      });
      const school = await newSchool.save();
      res.status(200).json(school);
   } catch (err) {
      console.log(err.message);
      res.status(500).json("Server Error");
      return next(error);
   }
};

//? @route GET api/school/all
//? @desc Get all schools
//? @access Public for now

exports.get_All_Schools = async (req, res, next) => {
   try {
      const schools = await School.find({});
      if (schools) {
         res.status(200).json(schools);
      } else {
         res.status(404).json();
      }
   } catch (err) {
      res.status(500).json(err);
   }
};

//? @route GET api/school/:id
//? @desc Get school by ID
//? @access Private/Public

exports.get_SchoolById = async (req, res) => {
   const schoolId = req.params._id;
   // let school;
   try {
      const school = await School.findById(schoolId);
      if (!school) {
         return res
            .status(404)
            .json({ msg: "School not found, try again please" });
      } else {
         res.status(200).json({ school: school.toObject({ getters: true }) });
      }
   } catch (err) {
      console.log(err.message);
      res.status(500).json("Server Error");
   }
};

//? @route Post api/school/add/:schoolid
//? @desc Add student to school
//? @access Private/Public

exports.add_student_to_school = async (req, res) => {
   try {
      const school = await School.findById(req.params.schoolid);
      if (!school) {
         res.status(404).json({ msg: "School not found, try again" });
      }

      const newStudent = {
         name: "Nina P. Simone",
         school: school.name,
         city: "Chicago",
         course: {
            subject: " Sound ",
            grade: 78,
         },
         ID: 4681,
      };

      school.students.unshift(newStudent);
      await school.save();
      res.json({ school: school.toObject({ getters: true }) });
      // console.log(newStudent);
   } catch (err) {
      res.status(500).send("Server Error, try again");
   }
};

//? @route Get api/school/search-user/:query
//? @desc Search school
//? @access Public

exports.search_school = async (req, res) => {
   try {
      const { query } = req.params;
      if (!query) {
         res.status(404).json({ msg: "School not found" });
      }
      // i modifier is used to perform case-insensitive matching
      const school = await School.find({
         $or: [
            { name: { $regex: query, $options: "i" } },
            { location: { $regex: query, $options: "i" } },
         ],
      });
      res.json(school);
   } catch (error) {
      res.status(500).send("Server Error, try again");
   }
};
