// Import Controller
const userController = require("./user.controller");
const studentController = require('./student.controller')
const batch = require('./batch.controller')
const downloadCsv = require('./downloadCsv.controller')
module.exports = {
  userController,
  studentController,
  batch,
  downloadCsv
};
