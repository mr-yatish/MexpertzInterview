// Import Router
const router = require("express").Router();

// Import Controller
const { batch } = require("../controllers");

// ROUTE: Start
// Create Student Route
router.post("/createBatch", batch.createBatch);
// ROUTE: End

module.exports = router;