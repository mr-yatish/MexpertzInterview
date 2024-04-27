const userRouter = require("./user.router");
const studentRouter = require('./student.router')
const batch = require('./batch.router')
const downloadCsv = require('./downloadCsv.router')
module.exports = {
  userRouter,
  studentRouter,
  batch,
  downloadCsv
};
