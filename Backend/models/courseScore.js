const mongoose = require('mongoose');

const courseScoresSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    DSAFinalScore: Number,
    WebDFinalScore: Number,
    ReactFinalScore: Number
});
module.exports = mongoose.model('CourseScores', courseScoresSchema);
