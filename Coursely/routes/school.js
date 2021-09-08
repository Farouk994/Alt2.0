const express = require("express");
const schoolController = require("../controllers/school-controller");

const router = express.Router();

router.post("/newSchool", schoolController.add_School);

router.get("/:_id", schoolController.get_SchoolById);

router.get("/", schoolController.get_All_Schools);

router.post("/add/:schoolid", schoolController.add_student_to_school);

router.get("/search-school/:query", schoolController.search_school);

module.exports = router;
