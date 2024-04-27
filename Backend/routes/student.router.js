// Import Router
const router = require("express").Router();

// Import Controller
const { studentController } = require("../controllers");

// ROUTE: Start
// Create Student Route
router.post("/createStudent", studentController.createStudent);

// Get All Student routes
router.get("/getAllStudent", studentController.getAllStudent);

// ROUTE: End

module.exports = router;