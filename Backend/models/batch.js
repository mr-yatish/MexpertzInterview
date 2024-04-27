const mongoose = require('mongoose');

// batch Model
const batchSchema = new mongoose.Schema({
    batch: String
});

module.exports = mongoose.model('Batch', batchSchema);


