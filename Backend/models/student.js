const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    college: String,
    status: { type: String, enum: ['placed', 'not placed'] },
    batchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch' }
});
module.exports = mongoose.model('Student', studentSchema);
