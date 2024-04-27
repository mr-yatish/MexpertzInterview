const { studentService } = require('../services')
const { responseMessages } = require('../configs')
// Create a new student
async function createStudent(req, res) {
    try {
        const payload = req.body
        const newStudent = await studentService.createStudent(payload);
        return res.status(200).send({
            hasError: false,
            data: newStudent,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            hasError: true,
            message: responseMessages.INTERNAL_SERVER_ERROR,
        });
    }
}
async function getAllStudent(req, res) {
    try {
        const students = await studentService.getAllStudent();
        return res.status(200).send({
            hasError: false,
            data: students,
        });
    } catch (error) {
        console.log(err);
        return res.status(500).send({
            hasError: true,
            message: responseMessages.INTERNAL_SERVER_ERROR,
        });
    }
}
module.exports = {
    createStudent,
    getAllStudent
}