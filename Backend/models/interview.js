const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    companyName: String,
    date: Date
});
module.exports = mongoose.model('Interview', interviewSchema);