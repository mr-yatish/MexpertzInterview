// Import Controller
const userController = require("./user.controller");
const studentController = require('./student.controller')
const batch = require('./batch.controller')
module.exports = {
  userController,
  studentController,
  batch
};
