const { convertCsv } = require('../utils')
const { studentService } = require('../services')
const fs = require('fs')
// Create a new batch
async function createCSV(req, res) {
    const data = [];
    const allStudents = await studentService.getAllStudent();
    allStudents.forEach((ele) => {
        data.push({
            studentId: ele._id,
            studentName: ele.name,
            studentStatus: ele.status,
            studentCollege: ele.college
        })
    })
    await convertCsv.Convert(data);
    return res.download('./Csv/data.csv')
}

module.exports = {
    createCSV
}