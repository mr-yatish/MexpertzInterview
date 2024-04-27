const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    company: String,
    result: { type: String, enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'] }
});
module.exports = mongoose.model('Result', resultSchema);
