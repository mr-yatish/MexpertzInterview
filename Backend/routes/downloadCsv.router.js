// Import Router
const router = require("express").Router();

// Import Controller
const { downloadCsv } = require("../controllers");

// ROUTE: Start
// Create Student Route
router.get("/downloadData", downloadCsv.createCSV);
// ROUTE: End

module.exports = router;