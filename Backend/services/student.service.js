const { Student, Batch } = require('../models');
// Create a new student
async function createStudent(payload) {
    const student = new Student({
        ...payload
    });
    return await student.save();
}
async function getAllStudent() {
    const students = await Student.find({});
    return students;
}
module.exports = {
    createStudent,
    getAllStudent
}